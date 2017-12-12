// Initializes the `champions` service on path `/champions`
const createService = require('feathers-sequelize');
const createModel = require('../../models/champions.model');
const hooks = require('./champions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'champions',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/champions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('champions');

  service.hooks(hooks);
};
