// Initializes the `rounds` service on path `/rounds`
const createService = require('feathers-sequelize');
const createModel = require('../../models/rounds.model');
const hooks = require('./rounds.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'rounds',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rounds', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('rounds');

  service.hooks(hooks);
};
