'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('players', 'title', {
      type: Sequelize.STRING
    })
      .then(() => {
        return queryInterface.addColumn('players', 'picture', {
          type: Sequelize.STRING
        })
      })
  },

  down: (queryInterface, Sequelize) => {
  }
};
