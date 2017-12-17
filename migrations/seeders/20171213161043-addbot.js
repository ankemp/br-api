'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('players', [
      { id: '1337_bot', name: 'Bot', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('players', null, {});
  }
};
