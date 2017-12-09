// Initializes the `maps` service on path `/maps`
const createService = require('feathers-sequelize');
const createModel = require('../../models/maps.model');
const hooks = require('./maps.hooks');

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    name: 'maps',
    Model,
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/maps', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('maps');

  service.hooks(hooks);
};
