// Initializes the `telemetry` service on path `/telemetry`
const createService = require('./telemetry.class.js');
const hooks = require('./telemetry.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'telemetry',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/telemetry', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('telemetry');

  service.hooks(hooks);
};
