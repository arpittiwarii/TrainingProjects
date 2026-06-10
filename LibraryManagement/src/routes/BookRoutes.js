import * as bookController from '../controller/bookController.js'
import { Router } from 'express'

const routes = Router();

routes.post('/addBooks', bookController.addBooksController)
routes.get('/getBooks', bookController.getBooksController)
routes.patch('/updateBooks', bookController.updateBooksController)
routes.delete('/deleteBooks', bookController.deleteBooksController)

export default routes;