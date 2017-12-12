'use strict';

const tableName = 'participants'
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
      json: {
        type: Sequelize.JSON,
        allowNull: true,
      }
    })
    .then(() => queryInterface.addIndex(tableName, indexParams));
  },

  down: (queryInterface, Sequelize) => {
  }
};
