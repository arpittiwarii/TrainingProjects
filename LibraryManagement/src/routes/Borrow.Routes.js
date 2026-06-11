import * as borrowController from '../controller/borrow.Controller.js'
import { Router } from 'express'
import validate from '../middleware/validate.js'
import { borrowSchema } from '../schemas/borrow.schema.js'

const routes = Router();

routes.post('/borrowBook', validate(borrowSchema), borrowController.borrowBookController)
routes.post('/returnBook', validate(borrowSchema), borrowController.returnBookController)
routes.get('/getBorrowedBooks', borrowController.getBorrowedBooksController)
routes.delete('/deleteBorrowRecord/:id', borrowController.deleteBorrowRecordController)

export default routes;