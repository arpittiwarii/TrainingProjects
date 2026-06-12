import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Author = sequelize.define('authors', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
}, {
  tableName: 'authors',
  timestamps: true,
  paranoid: true,
});

export default Author;