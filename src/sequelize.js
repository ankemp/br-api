const Sequelize = require('sequelize');

module.exports = function (app) {
  const defaults = {
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true
    }
  };
  let sequelize;
  if (process.env.NODE_ENV === 'production') {
    const sqlUser = app.get('sqlUser');
    const sqlPass = app.get('sqlPass');
    const sqlDb = app.get('sqlDb');
    const socketPath = app.get('socketPath');
    const options = Object.assign(defaults, {
      dialectOptions: {
        socketPath
      }
    });
    sequelize = new Sequelize(sqlDb, sqlPass, sqlPass, options);
  } else if (process.env.NODE_ENV === 'migrate') {
    const sqlUser = app.get('sqlUser');
    const sqlPass = app.get('sqlPass');
    const sqlDb = app.get('sqlDb');
    const options = Object.assign(defaults, {
      port: '3306',
      host: 'localhost'
    })
    sequelize = new Sequelize(sqlDb, sqlPass, sqlPass, options);
  } else {
    const connectionString = app.get('postgres');
    const options = Object.assign(defaults, {});
    sequelize = new Sequelize(connectionString, options);
  }
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    sequelize.sync();

    return result;
  };
};
