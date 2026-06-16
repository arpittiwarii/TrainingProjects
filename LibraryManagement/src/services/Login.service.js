const User = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const { generateToken } = require('./token.service.js')

const Login = async ({ email, password }) => {
    if (!email && !password)
        throw new AppError("email and passsword is required", 404)

    const user = await User.scope("withPassword").findOne({ where: { email } })
    if (!user)
        throw new AppError("Wrong email User not found", 404)

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword)
        throw new AppError("wrong password, please try again", 404)

    const tokenData = generateToken(user);

    return ({ ...tokenData, user: user })
}

module.exports = { Login }