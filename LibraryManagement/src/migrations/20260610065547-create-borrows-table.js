'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('borrows',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'users',
          key:'id'
        },
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
      },
      bookId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'books',
          key:'id'
        },
        onDelete:'RESTRICT',
        onUpdate:'CASCADE'
      },
      borrowDate:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      returnDate:{
        type:Sequelize.DATE,
        allowNull:true
      },
      status: {
        type: Sequelize.ENUM(
          'BORROWED',
          'RETURNED',
          'OVERDUE'
        ),
        allowNull: false,
        defaultValue: 'BORROWED',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE borrows_id_seq RESTART WITH 1001;`
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('borrows')
  }
};
