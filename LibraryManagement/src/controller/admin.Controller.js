const adminService = require('../services/admin.service.js');
const { success } = require('../utils/apiResponse.js');

const getUserController = async (req, res, next) => {
    try {
        const result = await adminService.getUserService();
        return success(res, result, 'Users list sent', 201);
    } catch (err) {
        next(err);
    }
};
const getBookController = async (req, res, next) => {
    try {
        const result = await adminService.getBookService();
        return success(res, result.books, 'Books list sent', 201);
    } catch (err) {
        next(err);
    }
};

module.exports = { getUserController, getBookController };