import * as bookService from '../services/book.service.js'
import { success } from '../utils/apiResponse.js'


export const addBooksController = async (req, res, next) => {
    try {
        const result = await bookService.addBookService(req.body)
        return success(res, result, "", 201)
    } catch (err) {
        next(err)
    }
}
export const getBooksController = async (req, res, next) => {
    try {

        const result = await bookService.getBookService()
        return success(res, result, "", 201)
    } catch (err) {
        next(err)
    }
}
export const updateBooksController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await bookService.updateBookService(id, req.body)
        return success(res, result, "", 201)
    } catch (err) {
        next(err)
    }
}
export const deleteBooksController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await bookService.deleteBookService(id)
        return success(res, result, "", 201)
    } catch (err) {
        next(err)
    }
}