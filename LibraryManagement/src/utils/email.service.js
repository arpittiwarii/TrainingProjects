const nodemailer = require('nodemailer')
require('dotenv').config();


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
const sendWelcomeEmail = async ({ email, name, otp }) => {
    console.log(email, name)
    await transporter.sendMail({
        from: `"Library App" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Welcome to Library App 🎉",
        html: `
            <h2>Hello ${name},</h2>
            <p>Welcome to Library App.</p>
            <p>your otp is : ${otp}.</p>
            <p>Your account has been created successfully.</p>
        `
    });
    return true
};

module.exports = { sendWelcomeEmail }