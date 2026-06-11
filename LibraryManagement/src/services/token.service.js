import AppError from '../error/error.js'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config();

export const generateToken = (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email
    }
    const token = JWT.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE_IN
    })

    return { token, expiresIn: process.env.JWT_EXPIRE_IN }
}


