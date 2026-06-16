const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');

const Borrow = sequelize.define(
  "borrows",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    borrowDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    returnDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM(
        "BORROWED",
        "RETURNED",
        "OVERDUE"
      ),
      allowNull: false,
      defaultValue: "BORROWED",
    },
  },
  {
    tableName: "borrows",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Borrow;