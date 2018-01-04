'use strict';

const tableName = 'teams'
const indexParams = { fields: ['id', 'name'] }

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
    //.then(() => queryInterface.addIndex(tableName, indexParams));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('teams')
  }
};
