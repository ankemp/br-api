// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const participants = sequelizeClient.define('participants', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    stats: {
      type: DataTypes.JSON,
      allowNull: true,
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  participants.associate = function (models) {
    participants.belongsTo(models.matches);
    participants.belongsTo(models.rosters);
    participants.belongsTo(models.players);
    participants.belongsTo(models.champions);
  };

  return participants;
};
