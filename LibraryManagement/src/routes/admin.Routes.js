const express = require('express');
const adminController = require('../controller/admin.Controller.js');

const routes = express.Router();

routes.get('/getUsers', adminController.getUserController);
routes.get('/getBooks', adminController.getBookController);

module.exports = routes;