const JWT = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email
    };
    const token = JWT.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE_IN
    });

    return { token, expiresIn: process.env.JWT_EXPIRE_IN };
};

module.exports = { generateToken };

