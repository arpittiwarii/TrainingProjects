import Author from './author.model.js';
import Book from './book.model.js';
import User from './user.model.js';
import Borrow from './borrow.model.js';

Author.hasMany(Book, {
  foreignKey: 'authorId',
  onDelete: 'CASCADE',
});

Book.belongsTo(Author, {
  foreignKey: 'authorId',
});

Book.hasMany(Borrow, {
  foreignKey: 'bookId',
  as: 'borrows',
  onDelete: 'RESTRICT',
});

Borrow.belongsTo(Book, {
  foreignKey: 'bookId',
  as: 'book',
});

User.hasMany(Borrow, {
  foreignKey: 'userId',
  as: 'borrows',
  onDelete: 'RESTRICT',
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
