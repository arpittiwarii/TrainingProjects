'use strict';

import { create } from 'node:domain';
import bcrypt from 'bcrypt';
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
    await queryInterface.bulkInsert('users', [
      {
        name: "Alice Smith",
        email: "alice.smith@example.com",
        password: await bcrypt.hash("Alice123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        password: await bcrypt.hash("Bob123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        password: await bcrypt.hash("Charlie123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "David Wilson",
        email: "david.wilson@example.com",
        password: await bcrypt.hash("David123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Eve Davis",
        email: "eve.davis@example.com",
        password: await bcrypt.hash("Eve123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Frank Miller",
        email: "frank.miller@example.com",
        password: await bcrypt.hash("Frank123", 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Grace Lee",
        email: "grace.lee@example.com",
        password: await bcrypt.hash("Grace123", 10),
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
