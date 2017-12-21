// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const Promise = require('bluebird');
const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

function getPlayerByName(name) {
  const filter = { playerNames: name };
  return brApi.getPlayers(filter)
    .then(response => map.players(response))
    .catch(response => [])
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && !!context.params) {
      const sequelizeClient = context.app.get('sequelizeClient');
      const playersService = context.app.service('players');

      const { name } = context.params.query;
      if (name) {
        return getPlayerByName(name)
          .then(players => Array.isArray(players) && players.length ? players : Promise.reject())
          .then(players => {
            return Promise.map(players, player => {
              return sequelizeClient.models.players
                .findAndCount({ where: { id: player.id } })
                .then(({ count }) => count !== 0)
                .then(exists => {
                  if (exists) {
                    return playersService.patch(player.id, player);
                  }
                  return playersService.create(player);
                })
            })
              .then(players => {
                context.result = {};
                context.result.data = players;
                context.result.total = players.length;
                context.result.limit = players.length;
                context.result.skip = 0;
                return context;
              })
              .catch(() => context);
          })
      }
    }
    return context;
  };
};
