const express = require('express');
const authorController = require('../controller/author.Controller.js');
const validate = require('../middleware/validate.js');
const { authorSchema } = require('../schemas/author.schema.js');

const routes = express.Router();

routes.post('/addAuthor', validate(authorSchema), authorController.addAuthorController);
routes.get('/getAuthors', authorController.getAuthorsController);
routes.patch('/updateAuthor/:id', validate(authorSchema), authorController.updateAuthorController);
routes.delete('/deleteAuthor/:id', authorController.deleteAuthorController);

module.exports = routes;