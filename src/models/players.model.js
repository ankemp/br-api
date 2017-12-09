// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const players = sequelizeClient.define('players', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    patchVersion: {
      type: DataTypes.STRING,
    },
    shardId: {
      type: DataTypes.STRING,
    },
    titleId: {
      type: DataTypes.STRING,
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  players.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return players;
};
