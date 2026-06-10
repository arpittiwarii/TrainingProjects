import Author from './Author.js';
import Book from './Book.js';
import User from './User.js';
import Borrow from './Borrow.js';

Author.hasMany(Book, {
  foreignKey: 'authorId',
  as: 'books',
  onDelete: 'RESTRICT',
});

Book.belongsTo(Author, {
  foreignKey: 'authorId',
  as: 'author',
});

Book.hasMany(Borrow, {
  foreignKey: 'bookId',
  as: 'borrows',
});

Borrow.belongsTo(Book, {
  foreignKey: 'bookId',
  as: 'book',
});

User.hasMany(Borrow, {
  foreignKey: 'userId',
  as: 'borrows',
});

Borrow.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export {
  Author,
  Book,
  User,
  Borrow,
};

export default {
  Author,
  Book,
  User,
  Borrow,
};
