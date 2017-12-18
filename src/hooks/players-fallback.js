// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && context.method === 'get') {
      const playersService = context.app.service('players');
      const response = await brApi.getPlayer(context.id);
      const player = map.player(response);
      return playersService
        .create(player)
        .then(player => {
          context.result = {};
          context.result.data = player;
        })
        .then(() => context);
    }
    return context;
  };
};
