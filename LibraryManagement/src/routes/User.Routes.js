import { Router } from "express";
import * as authController from "../controller/auth.Controller.js"
import validate from "../middleware/validate.js"
import { registerSchema, loginSchema } from "../schemas/user.schema.js";

const routes = Router()

routes.post("/register", validate(registerSchema), authController.registerController)
routes.post("/login", validate(loginSchema), authController.loginController)

export default routes;