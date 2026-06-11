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
    await queryInterface.bulkInsert('books', [
      {
        title: "Harry Potter and the Philosopher's Stone",
        isbn: "9780747532699",
        publishedYear: 1997,
        totalCopies: 5,
        availableCopies: 5,
        authorId: 1001,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Great Gatsby",
        isbn: "9780743273565",
        publishedYear: 1925,
        totalCopies: 4,
        availableCopies: 4,
        authorId: 1001,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Moby Dick",
        isbn: "9781503280786",
        publishedYear: 1851,
        totalCopies: 2,
        availableCopies: 2,
        authorId: 1001,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Hobbit",
        isbn: "9780547928227",
        publishedYear: 1937,
        totalCopies: 3,
        availableCopies: 3,
        authorId: 1002,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "War and Peace",
        isbn: "9780199232765",
        publishedYear: 1869,
        totalCopies: 4,
        availableCopies: 4,
        authorId: 1002,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "1984",
        isbn: "9780451524935",
        publishedYear: 1949,
        totalCopies: 4,
        availableCopies: 4,
        authorId: 1003,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "To Kill a Mockingbird",
        isbn: "9780061120084",
        publishedYear: 1960,
        totalCopies: 6,
        availableCopies: 6,
        authorId: 1004,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Pride and Prejudice",
        isbn: "9780141439518",
        publishedYear: 1813,
        totalCopies: 2,
        availableCopies: 2,
        authorId: 1005,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
