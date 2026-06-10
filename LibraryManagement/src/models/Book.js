import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js";

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
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  },
  {
    tableName: "books",
    paranoid: true,
    underscored: true,
  },
);

export default Book;
