import { Register } from "../services/Register.service.js"
import { Login } from "../services/Login.service.js"
import { success } from "../utils/apiResponse.js"
export const registerController = async (req, res, next) => {
    try {
        const result = await Register(req.body)
        return success(res, result, "Registration successfull", 201)
    } catch (err) {
        next(err)
    }
}

export const loginController = async (req, res, next) => {
    try {
        const result = await Login(req.body)
        return success(res, result, "login Successfully", 201)
    } catch (err) {
        next(err)
    }
}