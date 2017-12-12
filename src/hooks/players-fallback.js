// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.id) {
      const response = await brApi.getPlayer(context.id.id);
      const player = map.player(response);
      context.app.service('players').create(player);
      context.result = {};
      context.result.data = player;
    }
    return context;
  };
};
