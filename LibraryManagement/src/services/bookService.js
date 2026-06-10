import Book from "../models/Book.js"
import AppError from "../error/error.js"

export const addBookService = async({title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies})=>{
    try{
        const [...rest]={title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies}
        rest.forEach((field)=>{
            if(!field)
                throw new AppError(`${field} is required `, 404)
        })
        const book = await Book.create({...rest})
        if(!book)
            throw new AppError('book now created, due to server problem', 500)
    }catch(err){
        next(err)
    }
        
}
export const getBookService = async()=>{
    try{

    }catch(err){
        
    }
}
export const updateBookService = async()=>{

}
export const deleteBookService = async()=>{

}