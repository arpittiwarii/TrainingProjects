const { Register } = require('../services/Register.service.js');
const { Login } = require('../services/Login.service.js');
const { success } = require('../utils/apiResponse.js');

const registerController = async (req, res, next) => {
    try {
        const result = await Register(req.body);
        return success(res, result, 'Registration successfull', 201);
    } catch (err) {
        next(err);
    }
};

const loginController = async (req, res, next) => {
    try {
        const result = await Login(req.body);
        return success(res, result, 'login Successfully', 201);
    } catch (err) {
        next(err);
    }
};

module.exports = { registerController, loginController };