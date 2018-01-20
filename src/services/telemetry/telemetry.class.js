const

/* eslint-disable no-unused-vars */
class Service {
  constructor(app, options) {
    this.app = app || {};
    this.sequelizeClient = !!app.get ? app.get('sequelizeClient') : {};
    this.matches = !!app.get ? this.sequelizeClient.models.matches : {};
    this.options = options || {};
  }

  async find(params) {
    return [];
  }

  async get(id, params) {
    return this.matches.findById(id)
      .then(match => {
        console.log(match.telemetry);
        return match;
      });
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
