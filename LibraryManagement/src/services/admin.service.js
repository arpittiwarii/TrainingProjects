import User from '../models/user.model.js'
import Book from '../models/book.model.js'

export const getUserService = async () => {
    const users = await User.findAll({ attributes: ['id', 'name', 'email', 'role', 'borrow_limit', 'createdAt', 'updatedAt'] });

    return { users }
}
export const getBookService = async () => {
    const books = await Book.findAll();
    return { books }
}