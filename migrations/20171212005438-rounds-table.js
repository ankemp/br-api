'use strict';

const tableName = 'rounds'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ordinal: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      winningTeam: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      matchId: {
        type: Sequelize.STRING,
        references: {
          model: 'matches',
          key: 'id'
        }
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
