'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('teamMembers',{ fields:['playerId']})
    .then(() => queryInterface.addIndex('teamMembers', { fields: ['teamId']}))
    .then(() => queryInterface.addIndex('teams', { fields: ['id'] }))
    .then(() => queryInterface.addIndex('teams', { fields: ['name'] }))
    .then(() => queryInterface.removeIndex('players', 'players_id_name'))
    .then(() => queryInterface.addIndex('players', { fields: ['id'] }))
    .then(() => queryInterface.addIndex('players', { fields: ['name'] }))

  },
  down: (queryInterface, Sequelize) => {
    
  }
};