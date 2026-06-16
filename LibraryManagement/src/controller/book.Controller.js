const bookService = require('../services/book.service.js');
const { success } = require('../utils/apiResponse.js');

const addBooksController = async (req, res, next) => {
    try {
        const result = await bookService.addBookService(req.body);
        return success(res, result, '', 201);
    } catch (err) {
        next(err);
    }
};
const getBooksController = async (req, res, next) => {
    try {
        const result = await bookService.getBookService();
        return success(res, result, '', 201);
    } catch (err) {
        next(err);
    }
};
const updateBooksController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await bookService.updateBookService(id, req.body);
        return success(res, result, '', 201);
    } catch (err) {
        next(err);
    }
};
const deleteBooksController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await bookService.deleteBookService(id);
        return success(res, result, '', 201);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addBooksController,
    getBooksController,
    updateBooksController,
    deleteBooksController,
};