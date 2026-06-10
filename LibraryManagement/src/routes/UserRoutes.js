import { Router } from "express";
import * as authController from "../controller/authController.js"

const routes = Router()

routes.post("/register", authController.Register)
routes.post("/login", authController.login)

export default routes;