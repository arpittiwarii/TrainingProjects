const User = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const { generateToken } = require('./token.service.js')

const Register = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser)
        throw new AppError("User already existed", 404)

    const hashPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
    const user = await User.create({
        name, email, password: hashPassword
    })
    if (!user)
        throw new AppError("user not created server error", 501)
    const tokenData = generateToken(user);

    return ({ ...tokenData, user: user })
}

module.exports = { Register }