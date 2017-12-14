// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const players = sequelizeClient.define('players', {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    newestMatch: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    oldestMatch: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: true,
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  players.associate = function (models) { // eslint-disable-line no-unused-vars
  };

  return players;
};
