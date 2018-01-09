// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const _ = require('lodash');
const moment = require('moment-timezone');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && context.params.fallbackFrom && !!context.params.query.playerId) {
      const playersService = context.app.service('players');
      const playerId = context.params.query.playerId;
      const matches = context.result.data;
      const match = _.maxBy(matches, 'createdAt');
      const timezone = moment.tz.guess();

      if (!_.isUndefined(match)) {
        const endTime = moment.tz(match.createdAt, timezone).add(match.duration, 'seconds');
        return playersService.patch(playerId, { newestMatch: endTime.toDate() }).then(() => context);
      }
    }
    return context;
  };
};
