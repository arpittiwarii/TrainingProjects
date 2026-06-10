import * as adminService from '../services/adminService.js'
import { success } from '../utils/apiResponse.js'

export const getUserController = async(req, res, next)=>{
    try{
        const result = await adminService.getUserService()
        return success(res, result, "Users list sent", 201)
    }catch(err){
        next(err)
    }
}
export const getBookController = async(req, res, next)=>{
    try{
        const result = await adminService.getBookService()
        return success(res, result, "Books list sent", 201)
    }catch(err){
        next(err)
    }
}