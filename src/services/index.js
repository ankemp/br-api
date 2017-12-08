const matches = require('./matches/matches.service.js');
module.exports = function (app) {
  app.configure(matches);
};
