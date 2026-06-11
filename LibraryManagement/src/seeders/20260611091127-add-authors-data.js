'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('authors', [
      {
        name: "J.K. Rowling",
        bio: "British author, best known for the Harry Potter series.",
        birth_date: "1965-07-31",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "George Orwell",
        bio: "English novelist and essayist, known for his works Animal Farm and 1984.",
        birth_date: "1903-06-25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "George R.R. Martin",
        bio: "American novelist and short story writer, known for A Song of Ice and Fire series.",
        birth_date: "1948-09-20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Agatha Christie",
        bio: "English writer known for her detective novels and short stories.",
        birth_date: "1890-09-15",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Stephen King",
        bio: "American author of horror, supernatural fiction, suspense, and fantasy novels.",
        birth_date: "1947-09-21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jane Austen",
        bio: "English novelist known for her romantic fiction set among the British landed gentry.",
        birth_date: "1775-12-16",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mark Twain",
        bio: "American writer, humorist, entrepreneur, publisher, and lecturer.",
        birth_date: "1835-11-30",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('authors', null, {});
  }
};
