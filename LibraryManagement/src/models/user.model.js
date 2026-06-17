const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');
const { type } = require('node:os');

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("USER", "ADMIN"),
      defaultValue: "USER",
    },
    isVerify: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    balance: {
      type: DataTypes.INTEGER,
      min: 0,
      defaulValue: 0
    },
    borrow_limit: {
      type: DataTypes.INTEGER,
      max: 3,
      defaultValue: 0,
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ["password"],
      },
    },

    scopes: {
      withPassword: {
        attributes: {},
      },
    },
  },
  {
    tablename: "users",
    paranoid: true,
    timestamps: true,
  },
);
User.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password;
  return values;
};

module.exports = User;
