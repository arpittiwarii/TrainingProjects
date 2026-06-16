const express = require('express');
const bookController = require('../controller/book.Controller.js');
const validate = require('../middleware/validate.js');
const { bookSchema } = require('../schemas/book.schema.js');

const routes = express.Router();

routes.post('/addBooks', validate(bookSchema), bookController.addBooksController);
routes.get('/getBooks', bookController.getBooksController);
routes.patch('/updateBooks/:id', validate(bookSchema), bookController.updateBooksController);
routes.delete('/deleteBooks/:id', bookController.deleteBooksController);

module.exports = routes;