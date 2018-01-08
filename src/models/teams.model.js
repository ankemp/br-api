// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const teams = sequelizeClient.define('teams', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.INTEGER
    },
    division: {
      type: DataTypes.INTEGER
    },
    divisionRating: {
      type: DataTypes.INTEGER
    },
    league: {
      type: DataTypes.INTEGER
    },
    losses: {
      type: DataTypes.INTEGER
    },
    wins: {
      type: DataTypes.INTEGER
    },
    teamType: {
      type: DataTypes.STRING
    },
    placementGamesLeft: {
      type: DataTypes.INTEGER
    },
    topDivision: {
      type: DataTypes.INTEGER
    },
    topDivisionRating: {
      type: DataTypes.INTEGER
    },
    topLeague: {
      type: DataTypes.INTEGER
    },
    members: {
      type: DataTypes.JSON
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  teams.associate = function (models) { // eslint-disable-line no-unused-vars
    teams.belongsToMany(models.players, { through: models.teamMembers, foreignKey: 'teamId' });
  };

  return teams;
};
