// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const matches = sequelizeClient.define('matches', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gameMode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    patchVersion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shardId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    matchType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  matches.associate = function (models) {
    matches.belongsTo(models.maps, { as: 'map' });
    matches.hasMany(models.rosters, { as: 'roster' });
    matches.hasMany(models.rounds, { as: 'round' });
    matches.hasMany(models.participants, { as: 'participant' });
  };

  return matches;
};
