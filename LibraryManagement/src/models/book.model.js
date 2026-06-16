const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');

const Book = sequelize.define(
  "books",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    genre: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    publishedYear: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    totalCopies: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
    },
    availableCopies: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
    },
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'authors',
        key: 'id'
      },
      onDelete: 'RESTRICT',
      allowNull: false,
    },
  },
  {
    tableName: "books",
    paranoid: true,
  },
);

module.exports = Book;
