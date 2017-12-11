'use strict';

const tableName = 'rosters'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    shardId:{
      type: Sequelize.STRING
    }
  });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
