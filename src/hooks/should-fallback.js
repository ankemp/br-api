// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const moment = require('moment-timezone');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.params && !!!context.params.fallbackFrom && !!context.params.query.playerId) {
      const sequelizeClient = context.app.get('sequelizeClient');
      const { playerId } = context.params.query;
      const timezone = moment.tz.guess();
      const minsAgo = moment.tz(new Date(), timezone).subtract(20, 'minutes');

      return sequelizeClient.models.players
        .find({ where: { id: playerId } })
        .then(player => {
          const newestMatch = !!player.newestMatch ? moment.tz(player.newestMatch, timezone) : moment();
          if (!!player && newestMatch && newestMatch.isBefore(minsAgo)) {
            context.params.fallbackFrom = player.newestMatch;
          } else {
            const weekAgo = moment().subtract(7, 'days')
            context.params.fallbackFrom = weekAgo.toDate();
          }
        })
        .then(() => context);
    }
    return context;
  };
};
