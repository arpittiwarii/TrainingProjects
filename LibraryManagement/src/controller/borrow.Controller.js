const { success } = require('../utils/apiResponse.js');
const borrowService = require('../services/borrow.service.js');

const getBorrowedBooksController = async (req, res, next) => {
    try {
        const borrowedBooks = await borrowService.listBorrowRecords({ activeOnly: true });
        return success(res, borrowedBooks, 'Borrowed books retrieved', 200);
    } catch (err) {
        next(err);
    }
};

const borrowBookController = async (req, res, next) => {
    try {
        const { userId, bookId } = req.body;
        const borrowRecord = await borrowService.borrowBook(userId, bookId);
        return success(res, borrowRecord, 'Book borrowed', 200);
    } catch (err) {
        next(err);
    }
};

const returnBookController = async (req, res, next) => {
    try {
        const borrowId = req.params.id;
        const returnRecord = await borrowService.returnBook(borrowId);
        return success(res, returnRecord, 'Book returned', 200);
    } catch (err) {
        next(err);
    }
};

const deleteBorrowRecordController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await borrowService.deleteBorrowRecord(id);
        return success(res, { result }, 'Borrow record deleted', 200);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getBorrowedBooksController,
    borrowBookController,
    returnBookController,
    deleteBorrowRecordController,
};
