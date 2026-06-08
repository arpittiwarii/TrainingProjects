import express from 'express'
import {addUser,getUser} from '../controller/user.controller.js'
const routes = express.Router()

routes.post("/addUser", addUser)
routes.get("/getuser", getUser)

export default routes;