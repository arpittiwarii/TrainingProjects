const { verifyOtp } = require('../services/otp.service.js');
const { success } = require('../utils/apiResponse.js');

const addotpController = async (req, res, next) => {
    try {
        const { id, otp } = req.body
        const userId = req.params.id;
        const result = await verifyOtp(id, otp, userId);
        return success(res, result, 'otp verification successfull done', 201);
    } catch (err) {
        next(err);
    }
};


module.exports = { addotpController };