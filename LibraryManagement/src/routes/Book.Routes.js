import * as bookController from '../controller/book.Controller.js'
import { Router } from 'express'
import validate from '../middleware/validate.js'
import { bookSchema } from '../schemas/book.schema.js'

const routes = Router();

routes.post('/addBooks', validate(bookSchema), bookController.addBooksController)
routes.get('/getBooks', bookController.getBooksController)
routes.patch('/updateBooks/:id', validate(bookSchema), bookController.updateBooksController)
routes.delete('/deleteBooks/:id', bookController.deleteBooksController)

export default routes;