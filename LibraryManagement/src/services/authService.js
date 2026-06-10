import User from '../models/User.js'
import AppError from '../error/error.js'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config();

const generateToken=(user)=>{
    const payload = {
        id : user.id,
        name:user.name,
        role:user.role,
        email:user.email
    }
    const token = JWT.sign(payload, process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE_IN
    })

    return {token, expiresIn:process.env.JWT_EXPIRE_IN}
}
export const Register = async({name, email, password})=>{
    const existingUser = await User.findOne({where:{email}})
    if(existingUser)
        throw new AppError("User already existed",404)

    const hashPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
    const user = await User.create({
        name,email,password:hashPassword
    })
    if(!user)
        throw new AppError("user not created server error", 501)
    const tokenData = generateToken(user);

    return({...tokenData, user:user})
}

export const Login = async({email, password})=>{
    if(!email && !password)
        throw new AppError("email and passsword is required", 404)

    const user = await User.scope("withPassword").findOne({where:{email}})
    if(!user)
        throw new AppError("Wrong email User not found",404)

    const isValidPassword = await bcrypt.compare(password,user.password)
    if(!isValidPassword)
        throw new AppError("wrong password, please try again",404)

    const tokenData = generateToken(user);

    return({...tokenData, user:user})
}