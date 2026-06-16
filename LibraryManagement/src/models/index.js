const Author = require('./author.model.js');
const Book = require('./book.model.js');
const User = require('./user.model.js');
const Borrow = require('./borrow.model.js');

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

module.exports = {
  Author,
  Book,
  User,
  Borrow,
};
