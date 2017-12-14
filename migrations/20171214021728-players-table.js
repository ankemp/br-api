'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('players', 'newestMatch', {
      type: Sequelize.DATE
    })
    .then(()=>{
    return queryInterface.addColumn('players', 'oldestMatch', {
      type: Sequelize.DATE
    })
  })
  },

  down: (queryInterface, Sequelize) => {
}
};
