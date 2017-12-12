'use strict';

const tableName = 'rounds'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      duration:{
        type:Sequelize.INTEGER,
      },
      gameMode:{
        type:Sequelize.STRING,
      },
      patchMode:{
        type:Sequelize.STRING,
      },
      shardId:{
        type:Sequelize.STRING,
      },
      createdAt:{
        type:Sequelize.DATE
      },
      updatedAt:{
        type:Sequelize.DATE
      },
      matchId:{
        type:Sequelize.STRING,
        references: {
          model: 'matches',
          key: 'id'
        }
      }
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
  