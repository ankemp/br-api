// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const participants = sequelizeClient.define('participants', {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    stats: {
      type: Sequelize.JSON,
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
