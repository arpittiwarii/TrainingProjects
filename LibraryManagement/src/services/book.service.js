import Book from "../models/book.model.js"
import AppError from "../error/error.js"

export const addBookService = async ({ title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies }) => {
    try {
        const [...rest] = { title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies }
        rest.forEach((field) => {
            if (!field)
                throw new AppError(`${field} is required `, 404)
        })
        const author = await Author.findByPk(authorId)
        if (!author)
            throw new AppError('Author not found', 404)
        const book = await Book.create({ title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies })
        console.log(book)
        console.log(title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies)
        if (!book)
            throw new AppError('book now created, due to server problem', 500)
    } catch (err) {
        throw new AppError('Error adding book', 500)
    }
}


export const getBookService = async () => {
    try {
        const books = await Book.findAll()
        if (!books)
            throw new AppError('No books found', 404)
        return books
    } catch (err) {
        throw new AppError('Error fetching books', 500)
    }
}
export const updateBookService = async (id, updateData) => {
    try {
        const [...rest] = { title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies }
        rest.forEach((field) => {
            if (!field)
                throw new AppError(`${field} is required `, 404)
        })
        const book = await Book.findByPk(id)
        if (!book)
            throw new AppError('Book not found', 404)
        await book.update(rest)
        return book
    } catch (err) {
        throw new AppError('Error updating book', 500)
    }
}
export const deleteBookService = async (id) => {
    try {
        const book = await Book.findByPk(id)
        if (!book)
            throw new AppError('Book not found', 404)
        await book.destroy()
        return book
    } catch (err) {
        throw new AppError('Error deleting book', 500)
    }
}