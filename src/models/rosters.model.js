// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const rosters = sequelizeClient.define('rosters', {
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
    score: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    won: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  rosters.associate = function (models) {
    rosters.belongsTo(models.matches, { as: 'match' });
    rosters.hasMany(models.participants, { as: 'participant' });
  };

  return rosters;
};
