import { Router } from "express";
import * as adminController from "../controller/admin.Controller.js"

const routes = Router()

routes.get("/getUsers", adminController.getUserController)
routes.get("/getBooks", adminController.getBookController)

export default routes;