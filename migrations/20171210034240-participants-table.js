'use strict';

const tableName = 'participants'
const indexParams = { fields: ['id', 'matchId', 'playerId'], unique: true }

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
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      json: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      rosterId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'rosters',
          key: 'id',
        }
      },
      matchId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'matches',
          key: 'id',
        }
      },
      championId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'champions',
          key: 'id',
        }
      },
      playerId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'players',
          key: 'id',
        }
      }
    })
      .then(() => queryInterface.removeIndex(tableName, indexParams.fields))
      .then(() => queryInterface.addIndex(tableName, indexParams));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName)
      .then(() => queryInterface.removeIndex(tableName, indexParams.fields))
      .then(() => queryInterface.removeIndex(tableName, indexParams.fields))
  }
};
