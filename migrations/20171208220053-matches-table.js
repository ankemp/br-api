'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches', {
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
        allowNull: false
      },
      gameMode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      patchVersion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shardId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stats: {
        type: Sequelize.JSON,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('matches');
  }
};
