// Initializes the `team-members` service on path `/team-members`
const createService = require('feathers-sequelize');
const createModel = require('../../models/team-members.model');
const hooks = require('./team-members.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'teamMembers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/teamMembers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('teamMembers');

  service.hooks(hooks);
};
