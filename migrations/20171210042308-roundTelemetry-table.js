'use strict';

const tableName = 'participants'
const indexParams = {fields:['id','matchId','playerId'],unique:true}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      abilityUses: {
        type: Sequelize.SMALLINT
      },
      damageDone: {
        type: Sequelize.SMALLINT
      },
      damagedReceived: {
        type: Sequelize.SMALLINT
      },
      deaths: {
        type: Sequelize.SMALLINT
      },
      disablesDone: {
        type: Sequelize.SMALLINT
      },
      disablesReceived: {
        type: Sequelize.SMALLINT
      },
      energyGained: {
        type: Sequelize.SMALLINT
      },
      energyUsed: {
        type: Sequelize.SMALLINT
      },
      healingDone: {
        type: Sequelize.SMALLINT
      },
      healingReceived: {
        type: Sequelize.SMALLINT
      },
      kills: {
        type: Sequelize.SMALLINT
      },
      score: {
        type: Sequelize.SMALLINT
      },
      side: {
        type: Sequelize.SMALLINT
      },
      timeAlive: {
        type: Sequelize.SMALLINT
      },
      round:{
        type: Sequelize.SMALLINT
      },
      roundLength :{
        type: Sequelize.SMALLINT
      },
      winningTeam  :{
        type: Sequelize.SMALLINT
      },
      matchId: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
          model: 'matches',
          key: 'id'
        }
      },
      playerId: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
          model: 'players',
          key: 'id'
        }
      }
    })
    .then(()=>queryInterface.removeIndex(tableName,indexParams.fields))
    .then(()=>queryInterface.addIndex(tableName,indexParams));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName)
      .then(()=>queryInterface.removeIndex(tableName,indexParams.fields))
      .then(()=>queryInterface.removeIndex(tableName,indexParams.fields))
  }
};
