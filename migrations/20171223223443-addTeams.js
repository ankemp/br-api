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
      },
      avatar: {
        type: Sequelize.INTEGER
      },
      division: {
        type: Sequelize.INTEGER
      },
      divisionRating: {
        type: Sequelize.INTEGER
      },
      league: {
        type: Sequelize.INTEGER
      },
      losses: {
        type: Sequelize.INTEGER
      },
      wins: {
        type: Sequelize.INTEGER
      },
      teamType: {
        type: Sequelize.STRING
      },
      placementGamesLeft: {
        type: Sequelize.INTEGER
      },
      topDivision: {
        type: Sequelize.INTEGER
      },
      topDivisionRating: {
        type: Sequelize.INTEGER
      },
      topLeague: {
        type: Sequelize.INTEGER
      },
      members:{
        type:Sequelize.JSON
      }
    })
    //.then(() => queryInterface.addIndex(tableName, indexParams));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('teams')
  }
};
