'use strict';

const tableName = 'rosters'
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
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      won: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    }).then(() => queryInterface.addIndex(tableName, indexParams));
  },

  down: (queryInterface, Sequelize) => {
  }
};
