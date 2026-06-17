const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/database.js');

const OTP = sequelize.define(
    "opts",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        otp: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        freezeTableName: true,
        paranoid: true,
    },
);

module.exports = OTP;
