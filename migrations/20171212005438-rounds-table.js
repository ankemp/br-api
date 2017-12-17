'use strict';

const tableName = 'rounds'
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
        allowNull: true
      },
      ordinal: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      winningTeam: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    })
    .then(() => queryInterface.addIndex(tableName, indexParams));
  },
  down: (queryInterface, Sequelize) => {
  }
};
