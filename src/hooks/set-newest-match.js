// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const _ = require('lodash');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && context.params.fallbackFrom && !!context.params.query.playerId) {
      const playersService = context.app.service('players');
      const playerId = context.params.query.playerId;
      const matches = context.result.data;
      const newestMatch = _.maxBy(matches, 'createdAt');

      return playersService.patch(playerId, { newestMatch: newestMatch.createdAt }).then(() => context);
    }
    return context;
  };
};
