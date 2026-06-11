import * as authorController from '../controller/author.Controller.js'
import { Router } from 'express'
import validate from '../middleware/validate.js'
import { authorSchema } from '../schemas/author.schema.js'

const routes = Router();

routes.post('/addAuthor', validate(authorSchema), authorController.addAuthorController)
routes.get('/getAuthors', authorController.getAuthorsController)
routes.patch('/updateAuthor/:id', validate(authorSchema), authorController.updateAuthorController)
routes.delete('/deleteAuthor/:id', authorController.deleteAuthorController)


export default routes;