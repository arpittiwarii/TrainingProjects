const express = require('express');
const authController = require('../controller/auth.Controller.js');
const validate = require('../middleware/validate.js');
const { registerSchema, loginSchema } = require('../schemas/user.schema.js');

const routes = express.Router();

routes.post('/register', validate(registerSchema), authController.registerController);
routes.post('/login', validate(loginSchema), authController.loginController);

module.exports = routes;