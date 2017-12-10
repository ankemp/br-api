'use strict';

const tableName = 'matches'
const indexParams = {fields:['id'],unique:true}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gameMode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      patchVersion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shardId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stats: {
        type: Sequelize.JSON,
        allowNull: false
      }
    })
    .then(()=>queryInterface.removeIndex(tableName, indexParams.fields))
    .then(()=>queryInterface.addIndex(tableName, indexParams));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName)
    .then(()=>queryInterface.removeIndex(tableName, indexParams.fields));
  }
};
