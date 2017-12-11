const matches = require('./matches/matches.service.js');
const maps = require('./maps/maps.service.js');
const players = require('./players/players.service.js');
const rosters = require('./rosters/rosters.service.js');
const participants = require('./participants/participants.service.js');
module.exports = function (app) {
  app.configure(matches);
  app.configure(maps);
  app.configure(players);
  app.configure(rosters);
  app.configure(participants);
};
