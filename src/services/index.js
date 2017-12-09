const matches = require('./matches/matches.service.js');
const maps = require('./maps/maps.service.js');
module.exports = function (app) {
  app.configure(matches);
  app.configure(maps);
};
