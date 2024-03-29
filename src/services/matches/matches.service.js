// Initializes the `matches` service on path `/matches`
const createService = require('feathers-sequelize');
const createModel = require('../../models/matches.model');
const hooks = require('./matches.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'matches',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  // TODO-REFACTOR: Extend createService with findAndCount function from sequelize.
  app.use('/matches', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('matches');

  service.hooks(hooks);
};
