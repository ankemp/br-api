'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teamMembers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      playerId:{
        type: Sequelize.STRING,
        allowNull:false,
        references: {
          model: 'players',
          key: 'id'
        }
      },
        teamId:{
          type: Sequelize.STRING,
          allowNull:false,
          references: {
            model: 'teams',
            key: 'id'
          }
        }
      })
    },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('teamMembers');
  }
};