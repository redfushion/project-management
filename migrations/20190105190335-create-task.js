'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
        allowNull: false,
      },
      deadline: {
        type: Sequelize.DATE
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      objetiveId: {
        type: Sequelize.INTIGER
        onDelete: 'CASCADE',
        references: {
          model: 'Objetives',
          key: 'id',
          as: 'objetiveId'
        }
      },
      userId: {
        type: Sequelize.INTIGER
        onDelete: 'CASCADE'
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};