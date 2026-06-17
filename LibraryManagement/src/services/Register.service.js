const User = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const { generateToken } = require('./token.service.js')
const { sendWelcomeEmail } = require("../utils/email.service.js");
const crypto = require('crypto');
const OTP = require('../models/opt.model.js')
const AppError = require('../error/error.js');
const { emailQueue } = require("../queues/email.queue.js");

const { sequelize } = require("../config/database.js");


function generateOTP() {
    return crypto.randomInt(0, 10000)
        .toString()
        .padStart(4, "0");
}
const sendOtp = async (newotp) => {
    if (!newotp)
        throw new AppError('otp does not send', 503)
    console.log(newotp)
    const otpresult = await OTP.create({ otp: newotp });
    return otpresult
}


const Register = async ({ name, email, password }) => {
    const transaction = await sequelize.transaction();

    try {
        const existingUser = await User.findOne({
            where: { email },
            transaction
        });

        if (existingUser)
            throw new AppError("User already existed", 409);

        const hashPassword = await bcrypt.hash(
            password,
            Number(process.env.SALT_ROUND)
        );

        const user = await User.create(
            {
                name,
                email,
                password: hashPassword,
            },
            { transaction }
        );
        const newotp = generateOTP();
        console.log(newotp)
        const responseotp = await sendOtp(newotp)

        await emailQueue.add(
            "welcome-email",
            {
                email: user.email,
                name: user.name,
                otp: newotp
            },
            {
                attempts: 3,
                backoff: {
                    type: "exponential",
                    delay: 2000
                },
                removeOnComplete: true
            }
        );

        // Outside transaction
        const tokenData = generateToken(user);
        // console.log(user.email, user.name)
        // const res = await sendWelcomeEmail({
        //     email: user.email,
        //     name: user.name,
        //     otp: newotp
        // });

        // console.log(res)

        await transaction.commit();

        return {
            ...tokenData,
            user,
            responseotp
        };
    } catch (error) {
        console.log("catch me error : ", error)
        await transaction.rollback();
        throw error;
    }
};
module.exports = { Register }