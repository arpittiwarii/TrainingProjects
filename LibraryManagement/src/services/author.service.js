const Author = require('../models/author.model.js');
const AppError = require('../error/error.js');
const Book = require('../models/book.model.js');

const getAuthorsService = async () => {
    try {
        const authors = await Author.findAll({
            include: {
                model: Book,
                attributes: ['id', 'title']
            }
        })
        if (!authors)
            throw new AppError('No authors found', 404)
        return authors
    } catch (err) {
        throw new AppError('Error fetching authors', 500)
    }
}
const addAuthorService = async ({ name, bio, birth_date }) => {
    try {
        if (!name || !bio || !birth_date)
            throw new AppError('Name, bio, and birth date are required', 400)
        const author = await Author.create({ name, bio, birth_date })
        if (!author)
            throw new AppError('Author not created due to server problem', 500)
        return author
    } catch (err) {
        throw new AppError('Error adding author', 500)
    }
}
const updateAuthorService = async (id, updateData) => {
    try {
        const author = await Author.findByPk(id)
        if (!author)
            throw new AppError('Author not found', 404)
        await author.update(updateData)
        return author
    } catch (err) {
        throw new AppError('Error updating author', 500)
    }
}
const deleteAuthorService = async (id) => {
    try {
        const author = await Author.findByPk(id)
        if (!author)
            throw new AppError('Author not found', 404)
        await author.destroy()
        return author
    } catch (err) {
        throw new AppError('Error deleting author', 500)
    }
}
module.exports = {
    getAuthorsService,
    addAuthorService,
    updateAuthorService,
    deleteAuthorService,
};