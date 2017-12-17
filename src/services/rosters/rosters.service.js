// Initializes the `rosters` service on path `/rosters`
const createService = require('feathers-sequelize');
const createModel = require('../../models/rosters.model');
const hooks = require('./rosters.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'rosters',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rosters', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('rosters');

  service.hooks(hooks);
};
