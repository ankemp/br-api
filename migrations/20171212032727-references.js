'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('matches', 'mapId', {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'maps',
          key: 'id',
        }
      })
      .then(() => {
        return queryInterface
          .addColumn('rounds', 'matchId', {
            type: Sequelize.STRING,
            references: {
              model: 'matches',
              key: 'id'
            }
          })  
      })
      .then(() =>{
        return queryInterface.addIndex('rounds',{ fields: ['matchId'] })
      })
      .then(() => {
        return queryInterface
          .addColumn('rosters', 'matchId', {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
              model: 'matches',
              key: 'id',
            },
          })
      })
      .then(() =>{
        return queryInterface.addIndex('rosters',{ fields: ['matchId']})
      })
      .then(() => {
        return queryInterface
          .addColumn('participants', 'rosterId', {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
              model: 'rosters',
              key: 'id',
            }
          })
      })
      .then(() => {
        return queryInterface
          .addColumn('participants', 'matchId', {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
              model: 'matches',
              key: 'id',
            }
          })
      })
      .then(() => {
        return queryInterface
          .addColumn('participants', 'championId', {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
              model: 'champions',
              key: 'id',
            }
          })
      })
      .then(() => {
        return queryInterface
          .addColumn('participants', 'playerId', {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
              model: 'players',
              key: 'id',
            }
          })
      })
      .then(() =>{
        return queryInterface.addIndex('participants',{ fields: ['matchId','rosterId','playerId']})
      })
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
