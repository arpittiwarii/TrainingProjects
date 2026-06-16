const express = require('express');
const borrowController = require('../controller/borrow.Controller.js');
const validate = require('../middleware/validate.js');
const { borrowSchema } = require('../schemas/borrow.schema.js');

const routes = express.Router();

routes.post('/borrowBook', validate(borrowSchema), borrowController.borrowBookController);
routes.post('/returnBook/:id', validate(borrowSchema), borrowController.returnBookController);
routes.get('/getBorrowedBooks', borrowController.getBorrowedBooksController);
routes.delete('/deleteBorrowRecord/:id', borrowController.deleteBorrowRecordController);

module.exports = routes;