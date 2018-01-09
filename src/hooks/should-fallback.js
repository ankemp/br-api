// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const moment = require('moment-timezone');
const _ = require('lodash');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.params && !!!context.params.fallbackFrom) {
      const sequelizeClient = context.app.get('sequelizeClient');
      const timezone = moment.tz.guess();

      if (options.service === 'matches' && !!context.params.query.playerId) {
        const minsAgo = moment.tz(new Date(), timezone).subtract(20, 'minutes');
        const { playerId } = context.params.query;

        return sequelizeClient.models.players
          .find({ where: { id: playerId } })
          .then(player => {
            const newestMatch = !!player.newestMatch ? moment.tz(player.newestMatch, timezone) : false;

            if (!!player && newestMatch && newestMatch.isBefore(minsAgo)) {
              context.params.fallbackFrom = player.newestMatch;
            } else if (!newestMatch) {
              const weekAgo = moment().subtract(7, 'days')
              context.params.fallbackFrom = weekAgo.toDate();
            }
          })
          .then(() => context);
      }

      if (options.service === 'teams' && !!context.params.query.playerId) {
        const hourAgo = moment.tz(new Date(), timezone).subtract(1, 'hours');
        const lastUpdate = moment.tz(_.minBy(context.result.data, 'updateAt'), timezone);

        context.params.teamsShouldFallback = false;
        if (lastUpdate.isBefore(hourAgo)) {
          // should even think about falling back
          console.log('should even think about falling back');
          context.params.teamsShouldFallback = true;
        }

        return context;
      }
    }

    return context;
  };
};
