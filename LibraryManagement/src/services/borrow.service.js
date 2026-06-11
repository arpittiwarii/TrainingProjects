import Borrow from '../models/borrow.model.js';
import User from '../models/user.model.js';
import Book from '../models/book.model.js';

const BorrowService = {
    MAX_ACTIVE_BORROWS: 3,
    MAX_RENEWALS: 2,
    DEFAULT_BORROW_DAYS: 21,
    FINE_PER_DAY: 1.5,

    calculateDueDate(startDate = new Date(), additionalDays = 21) {
        return new Date(startDate.getTime() + additionalDays * 24 * 60 * 60 * 1000);
    },

    async ensureActiveUser(userId) {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        if (user.isSuspended || user.status === 'inactive') {
            throw new Error('User is not eligible to borrow books');
        }
        return user;
    },

    async ensureBookIsAvailable(bookId) {
        const book = await Book.findById(bookId);
        if (!book) {
            throw new Error('Book not found');
        }
        if (book.availableCopies < 1) {
            throw new Error('Book is not available for borrowing');
        }
        return book;
    },

    async borrowBook(userId, bookId) {
        const user = await this.ensureActiveUser(userId);

        const activeBorrowCount = await Borrow.countDocuments({ user: userId, returnedAt: null });
        if (activeBorrowCount >= this.MAX_ACTIVE_BORROWS) {
            throw new Error(`User has reached the maximum of ${this.MAX_ACTIVE_BORROWS} active borrows`);
        }

        const book = await this.ensureBookIsAvailable(bookId);

        const borrowRecord = await Borrow.create({
            user: userId,
            book: bookId,
            borrowedAt: new Date(),
            dueAt: this.calculateDueDate(new Date(), this.DEFAULT_BORROW_DAYS),
            renewals: 0,
        });

        await Book.findByIdAndUpdate(bookId, { $inc: { availableCopies: -1 } });

        return borrowRecord;
    },

    async returnBook(borrowId) {
        const borrowRecord = await Borrow.findById(borrowId);
        if (!borrowRecord) {
            throw new Error('Borrow record not found');
        }
        if (borrowRecord.returnedAt) {
            throw new Error('Book has already been returned');
        }

        borrowRecord.returnedAt = new Date();
        borrowRecord.fine = await this.calculateFine(borrowRecord);
        const savedRecord = await borrowRecord.save();

        await Book.findByIdAndUpdate(borrowRecord.book, { $inc: { availableCopies: 1 } });

        return savedRecord;
    },

    async renewBorrow(borrowId, extraDays = 7) {
        const borrowRecord = await Borrow.findById(borrowId);
        if (!borrowRecord) {
            throw new Error('Borrow record not found');
        }
        if (borrowRecord.returnedAt) {
            throw new Error('Returned borrow cannot be renewed');
        }
        if (borrowRecord.renewals >= this.MAX_RENEWALS) {
            throw new Error('Renewal limit reached');
        }
        if (new Date() > new Date(borrowRecord.dueAt)) {
            throw new Error('Overdue borrows cannot be renewed');
        }

        borrowRecord.dueAt = this.calculateDueDate(new Date(borrowRecord.dueAt), extraDays);
        borrowRecord.renewals += 1;

        return borrowRecord.save();
    },

    async getBorrowRecord(borrowId) {
        const borrowRecord = await Borrow.findById(borrowId).populate('user book');
        if (!borrowRecord) {
            throw new Error('Borrow record not found');
        }
        return borrowRecord;
    },

    async listBorrowRecords(filter = {}) {
        const query = {};
        if (filter.userId) {
            query.user = filter.userId;
        }
        if (filter.activeOnly) {
            query.returnedAt = null;
        }
        if (filter.overdueOnly) {
            query.dueAt = { $lt: new Date() };
            query.returnedAt = null;
        }

        return Borrow.find(query).populate('user book');
    },

    async getUserBorrowHistory(userId) {
        await this.ensureActiveUser(userId);
        return this.listBorrowRecords({ userId, activeOnly: false });
    },

    async calculateFine(borrowRecord) {
        const effectiveReturn = borrowRecord.returnedAt ? new Date(borrowRecord.returnedAt) : new Date();
        const dueDate = new Date(borrowRecord.dueAt);

        if (effectiveReturn <= dueDate) {
            return 0;
        }

        const overdueDays = Math.ceil((effectiveReturn - dueDate) / (24 * 60 * 60 * 1000));
        return overdueDays * this.FINE_PER_DAY;
    },
};

export default BorrowService;
