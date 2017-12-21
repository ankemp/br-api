// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

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
          .then(players => Array.isArray(players) && players.length ? players.shift() : Promise.reject())
          .then(player => {
            return sequelizeClient.models.players
              .findAndCount({ where: { id: player.id } })
              .then(({ count }) => count !== 0)
              .then(exists => {
                if (exists) {
                  return playersService.patch(player.id, player);
                }
                return playersService.create(player);
              })
              .then(player => {
                context.result = {};
                context.result = player;
                return context;
              })
              .catch(() => context);
          })
      }
    }
    return context;
  };
};
