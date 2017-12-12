// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const rounds = sequelizeClient.define('rounds', {
    id: {
      type: DataTypes.DATE,
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
      allowNull: true
    },
    ordinal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    winningTeam: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  rounds.associate = function (models) { // eslint-disable-line no-unused-vars
    rounds.belongsTo(models.matches, { as: 'match' });
  };

  return rounds;
};
