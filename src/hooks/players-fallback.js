// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && context.method === 'get') {
      const sequelizeClient = context.app.get('sequelizeClient');
      const playersService = context.app.service('players');
      const response = await brApi.getPlayer(context.id);
      const player = map.player(response);

      return sequelizeClient.models.players
        .findAndCount({ where: { id: context.id } })
        .then(({ count }) => count !== 0)
        .then(exists => {
          if (!exists) {
            return playersService.create(player);
          }
          return playersService.patch(player.id, player);
        })
        .then(player => {
          context.result = {};
          context.result.data = player;
          return;
        })
        .then(() => context);
    }
    return context;
  };
};
