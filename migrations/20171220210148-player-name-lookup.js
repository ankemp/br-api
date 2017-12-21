'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('CREATE EXTENSION citext')
    .then(()=> queryInterface.sequelize.query('ALTER TABLE players ALTER COLUMN name TYPE citext'))
    .then(()=> queryInterface.sequelize.query('CREATE INDEX player_name_lower ON players (lower(name))'))
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
      queryInterface.sequelize.query('ALTER TABLE players ALTER COLUMN name TYPE character varying(255);');
      queryInterface.sequelize.query('DROP EXTENSION citext')
      .then(()=> queryInterface.removeIndex('players','player_name_lower'))
  }
};
