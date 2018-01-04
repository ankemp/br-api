// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const teamMember = sequelizeClient.define('team-members', {
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
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

    teamMember.associate = function (models) { // eslint-disable-line no-unused-vars
      teamMember.belongsTo(models.team);
      teamMember.belongsTo(models.player);
  };

  return teams;
};
