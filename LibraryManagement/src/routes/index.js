import { Router } from "express"
import UserRoutes from './User.Routes.js'
import BookRoutes from './Book.Routes.js'
import adminRoutes from './admin.Routes.js'
import AuthorRoutes from './Author.Routes.js'
import BorrowRoutes from './Borrow.Routes.js'

const routes = Router()
routes.use("/admin", adminRoutes)
routes.use("/user", UserRoutes)
routes.use("/books", BookRoutes)
routes.use("/author", AuthorRoutes)
routes.use("/borrow", BorrowRoutes)

export default routes;