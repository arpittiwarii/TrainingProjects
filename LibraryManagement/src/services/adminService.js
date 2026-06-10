import User from '../models/User.js'
import Book from '../models/Book.js'

export const getUserService = async() =>{
    const users = await User.findAll({attributes: ['id', 'name', 'email','role','borrow_limit','createdAt','updatedAt']});
    
    return {users}
}
export const getBookService = async() =>{
    const users = await User.findAll();
    return {users}
}