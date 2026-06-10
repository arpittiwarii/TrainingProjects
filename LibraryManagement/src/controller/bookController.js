import * as bookService from '../services/bookService.js'
import { success } from '../utils/apiResponse.js'


export const addBooksController = async(req, res, next) =>{
    try{
        const result = await bookService.addBookService(req.body)
        return success(res, result, "", 201)
    }catch(err){
        next(err)
    }
}
export const getBooksController = async(req, res, next) =>{
    try{
        const result = await bookService.getBookService(req.body)
        return success(res, result, "", 201)
    }catch(err){
        next(err)
    }
}
export const updateBooksController = async(req, res, next) =>{
    try{
        const result = await bookService.updateBookService(req.body)
        return success(res, result, "", 201)
    }catch(err){
        next(err)
    }
}
export const deleteBooksController = async(req, res, next) =>{
    try{
        const result = await bookService.deleteBookService(req.body)
        return success(res, result, "", 201)
    }catch(err){
        next(err)
    }
}