const express = require('express');
const otpController = require('../controller/otp.Controller.js');

const routes = express.Router();

routes.post('/verifyOtp/:id', otpController.addotpController);

module.exports = routes;