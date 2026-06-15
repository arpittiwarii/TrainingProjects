import Borrow from '../models/borrow.model.js';
import User from '../models/user.model.js';
import Book from '../models/book.model.js';

import sequelize from '../config/database.js';
const t = sequelize.transaction();

const BorrowService = {
    MAX_ACTIVE_BORROWS: 3,
    MAX_RENEWALS: 2,
    DEFAULT_BORROW_DAYS: 21,
    FINE_PER_DAY: 1.5,

    calculateDueDate(startDate = new Date(), additionalDays = 21) {
        return new Date(startDate.getTime() + additionalDays * 24 * 60 * 60 * 1000);
    },

    async ensureActiveUser(userId) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        if (user.isSuspended || user.status === 'inactive') {
            throw new Error('User is not eligible to borrow books');
        }
        return user;
    },

    async ensureBookIsAvailable(bookId) {
        const book = await Book.findByPk(bookId);
        if (!book) {
            throw new Error('Book not found');
        }
        if (book.availableCopies < 1) {
            throw new Error('Book is not available for borrowing');
        }
        return book;
    },

    async borrowBook(userId, bookId) {
        try {
            await sequelize.transaction(async (t) => {
                const [user, book, borrowRecord] = await Promise.all([
                this.ensureActiveUser(userId),
                this.ensureBookIsAvailable(bookId),
                Borrow.create({
                    userId: userId,
                    bookId: bookId,
                    borrowDate: new Date(),
                }),
            ])

            await Book.findByPk(bookId).then(book => {
                book.decrement('availableCopies', { by: 1 })
            });

            return borrowRecord;
            })
        } catch (err) {
            console.error(err)
            throw err;
        }
    },

    async returnBook(borrowId) {
        await sequelize.transaction(async (t) => {
            const borrowRecord = await Borrow.findByPk(borrowId);
            if (!borrowRecord) {
                throw new Error('Borrow record not found');
            }
            if (borrowRecord.returnDate) {
                throw new Error('Book has already been returned');
            }

            borrowRecord.returnDate = new Date();
            borrowRecord.status = "RETURNED";
            const savedRecord = await borrowRecord.save();
            console.log('Saved Record: ', savedRecord, borrowRecord.bookId)
            await Book.findByPk(borrowRecord.bookId).then(book => book.increment('availableCopies', { by: 1 })
            );

            return savedRecord;
        })
    },

    async renewBorrow(borrowId, extraDays = 7) {
        const borrowRecord = await Borrow.findByPk(borrowId);
        if (!borrowRecord) {
            throw new Error('Borrow record not found');
        }
        if (borrowRecord.returnDate) {
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
        const borrowRecord = await Borrow.findByPk(borrowId, { include: ['user', 'book'] });
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
            query.returnDate = null;
        }
        if (filter.overdueOnly) {
            query.dueAt = { $lt: new Date() };
            query.returnDate = null;
        }

        return Borrow.findAll({
            where: query, include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name', 'email']
                },
                {
                    model: Book,
                    as: 'book',
                    attributes: ['id', 'title', 'isbn']
                }
            ]
        });
    },

    async getUserBorrowHistory(userId) {
        await this.ensureActiveUser(userId);
        return this.listBorrowRecords({ userId, activeOnly: false });
    },

    async calculateFine(borrowRecord) {
        const effectiveReturn = borrowRecord.returnDate ? new Date(borrowRecord.returnDate) : new Date();
        const dueDate = new Date(borrowRecord.dueAt);

        if (effectiveReturn <= dueDate) {
            return 0;
        }

        const overdueDays = Math.ceil((effectiveReturn - dueDate) / (24 * 60 * 60 * 1000));
        return overdueDays * this.FINE_PER_DAY;
    },
};

export default BorrowService;
