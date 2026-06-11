import { success } from '../utils/apiResponse.js'
import borrowService from '../services/borrow.service.js'

export const getBorrowedBooksController = async (req, res, next) => {
    try {
        const borrowedBooks = await borrowService.listBorrowRecords({ activeOnly: true });
        return success(res, borrowedBooks, "Borrowed books retrieved", 200);
    } catch (err) {
        next(err)
    }
}

export const borrowBookController = async (req, res, next) => {
    try {
        const { userId, bookId } = req.body;
        const borrowRecord = await borrowService.borrowBook(userId, bookId);
        return success(res, borrowRecord, "Book borrowed", 200);
    } catch (err) {
        next(err)
    }
}

export const returnBookController = async (req, res, next) => {
    try {
        const { borrowId } = req.params;
        const returnRecord = await borrowService.returnBook(borrowId);
        return success(res, returnRecord, "Book returned", 200);
    } catch (err) {
        next(err)
    }
}


export const deleteBorrowRecordController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await borrowService.deleteBorrowRecord(id);
        return success(res, { result }, "Borrow record deleted", 200);
    } catch (err) {
        next(err)
    }
}
