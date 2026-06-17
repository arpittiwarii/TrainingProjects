const crypto = require('crypto');
const OTP = require('../models/opt.model.js')
const User = require('../models/user.model.js');
const AppError = require('../error/error.js');


const verifyOtp = async (id, otp, userId) => {
    const verifiedOtp = await OTP.findOne({ where: { id, otp } })
    if (!verifiedOtp)
        throw new AppError("otp not found", 404)

    const user = await User.findOne({ where: { id: userId } })
    await user.update({
        isVerify: true
    })
    // await user.save()
    return user

}
module.exports = { verifyOtp }