const User = require('../models/user.model.js')
const Book = require('../models/book.model.js')

const getUserService = async () => {
    const users = await User.findAll({ attributes: ['id', 'name', 'email', 'role', 'borrow_limit', 'isVerify', 'balance', 'createdAt', 'updatedAt'] });

    return { users };
};
const getBookService = async () => {
    const books = await Book.findAll();
    return { books };
};

module.exports = { getUserService, getBookService }