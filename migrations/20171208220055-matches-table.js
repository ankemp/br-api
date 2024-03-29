'use strict';

const tableName = 'matches'
const indexParams = { fields: ['id'], unique: true }

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
      matchType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telemetry: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    })
      .then(() => queryInterface.addIndex(tableName, indexParams));
  },

  down: (queryInterface, Sequelize) => {
  }
};
