// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app) {
      const playersService = context.app.service('players')
      if (context.method === 'find') {
        // const response = await brApi.getPlayers();
      } else if (context.method === 'get') {
        // const response = await brApi.getPlayer(context.id);
        // const player = map.player(response);
        // playersService.create(player);
        // context.result = {};
        // context.result.data = player;
        // console.log(context.result);
      }
    }
    return context;
  };
};
