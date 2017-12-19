'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('players', 'title')
      .then(() => queryInterface.removeColumn('players', 'picture'))
      .then(() => queryInterface.addColumn('players', 'stats', {
        type: Sequelize.JSON,
        allowNull: true,
      }))
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
