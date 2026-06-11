import Author from '../models/author.model.js'
import AppError from '../error/error.js'

export const getAuthorsService = async () => {
    try {
        const authors = await Author.findAll({ include: ['books'] })
        if (!authors)
            throw new AppError('No authors found', 404)
        return authors
    } catch (err) {
        throw new AppError('Error fetching authors', 500)
    }
}
export const addAuthorService = async ({ name, bio, birth_date }) => {
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
export const updateAuthorService = async (id, updateData) => {
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
export const deleteAuthorService = async (id) => {
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


export const authorServices = {
    getAuthorsService,
    addAuthorService,
    updateAuthorService,
    deleteAuthorService
}