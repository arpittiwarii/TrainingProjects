const express = require('express');
const UserRoutes = require('./User.Routes.js');
const BookRoutes = require('./Book.Routes.js');
const adminRoutes = require('./admin.Routes.js');
const AuthorRoutes = require('./Author.Routes.js');
const BorrowRoutes = require('./Borrow.Routes.js');
const otpRoutes = require('./otp.Routes.js')

const routes = express.Router();
routes.use('/admin', adminRoutes);
routes.use('/user', UserRoutes);
routes.use('/books', BookRoutes);
routes.use('/author', AuthorRoutes);
routes.use('/borrow', BorrowRoutes);
routes.use('/otp', otpRoutes)

module.exports = routes;