const matches = require('./matches/matches.service.js');
const maps = require('./maps/maps.service.js');
const players = require('./players/players.service.js');
module.exports = function (app) {
  app.configure(matches);
  app.configure(maps);
  app.configure(players);
};
