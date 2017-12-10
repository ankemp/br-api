'use strict';

const tableName = 'players'
const indexParams = {fields:['id'],unique:true}

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
      patchVersion: {
        type: Sequelize.STRING,
      },
      shardId: {
        type: Sequelize.STRING,
      },
      titleId: {
        type: Sequelize.STRING,
      }
    })
    .then(()=>queryInterface.removeIndex(tableName,indexParams.fields))
    .then(()=>queryInterface.addIndex(tableName,indexParams));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName)
      .then(()=>queryInterface.removeIndex(tableName,indexParams.fields))
  }
};
