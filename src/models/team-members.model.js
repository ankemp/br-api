// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const teamMembers = sequelizeClient.define('teamMembers', {
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

    teamMembers.associate = function (models) { // eslint-disable-line no-unused-vars
      teamMembers.belongsTo(models.teams);
      teamMembers.belongsTo(models.players);
  };

  return teamMembers;
};
