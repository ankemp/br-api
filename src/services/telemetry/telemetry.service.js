// Initializes the `telemetry` service on path `/telemetry`
const createService = require('./telemetry.class');
const hooks = require('./telemetry.hooks');

module.exports = function (app) {
  const options = {
    name: 'telemetry',
  };

  // Initialize our service with any options it requires
  app.use('/telemetry', createService(app, options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('telemetry');

  service.hooks(hooks);
};
