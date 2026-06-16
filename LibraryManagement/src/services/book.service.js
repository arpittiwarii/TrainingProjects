const Book = require('../models/book.model.js')
const AppError = require('../error/error.js')
const Author = require('../models/author.model.js')

const addBookService = async ({ title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies }) => {
    try {
        // console.log(title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies)

        const author = await Author.findByPk(authorId)
        // console.log(author)
        if (!author)
            throw new AppError('Author not found', 404)

        const book = await Book.create({ title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies })
        if (!book)
            throw new AppError('book now created, due to server problem', 500)

        return book
    } catch (err) {
        console.error(err)
        console.log('error hai ; ', err)
        throw err;
    }
}


const getBookService = async () => {
    try {
        const books = await Book.findAll({ include: { model: Author, as: 'author', attributes: ['id', 'name'] } })
        if (!books)
            throw new AppError('No books found', 404)
        return books
    } catch (err) {
        throw new AppError('Error fetching books', 500)
    }
}
const updateBookService = async (id, updateData) => {
    try {

        console.log(updateData)
        const { title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies } = updateData
        const rest = [title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies]
        rest.forEach((field) => {
            if (!field)
                throw new AppError(`${field} is required `, 404)
        })

        const book = await Book.findByPk(id)
        if (!book)
            throw new AppError('Book not found', 404)
        await book.update({ title, isbn, authorId, genre, publishedYear, totalCopies, availableCopies })
        return book
    } catch (err) {
        console.error(err)
        throw err;
    }
}
const deleteBookService = async (id) => {
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

module.exports = { addBookService, getBookService, updateBookService, deleteBookService }