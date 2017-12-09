'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('players', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      patchVersion: {
        type: Sequelize.STRING,
      },
      shardId: {
        type: Sequelize.STRING,
      },
      titleId: {
        type: Sequelize.STRING,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('players');
  }
};
