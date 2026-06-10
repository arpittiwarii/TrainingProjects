import * as authService from "../services/authService.js"
import { success } from "../utils/apiResponse.js"
export const Register = async(req, res, next)=>{
    try{
        const result = await authService.Register(req.body)
        return success(res, result, "Registration successfull", 201)
    }catch(err){
        next(err)
    }
}

export const login = async (req, res, next)=>{
    try{
        const result = await authService.Login(req.body)
        return success(res, result, "login Successfully", 201)
    }catch(err){
        next(err)
    }
}