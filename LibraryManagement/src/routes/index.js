import {Router} from "express"
import UserRoutes from './UserRoutes.js'
import BookRoutes from './BookRoutes.js'
import adminRoutes from './adminRoutes.js'
import AuthorRoutes from './AuthorRoutes.js'
import BorrowRoutes from './BorrowRoutes.js'

const routes = Router()
routes.use("/admin",adminRoutes)
routes.use("/user", UserRoutes)
routes.use("/books", BookRoutes)
routes.use("/author", AuthorRoutes)
routes.use("/borrow", BorrowRoutes)

export default routes;