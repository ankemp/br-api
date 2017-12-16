// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const moment = require('moment');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.params && !!!context.params.fallbackFrom && !!context.params.query.playerId) {
      const sequelizeClient = context.app.get('sequelizeClient');
      const { playerId } = context.params.query;
      const minsAgo = moment().subtract(20, 'minutes');

      return sequelizeClient.models.players
        .find({ where: { id: context.params.query.playerId } })
        .then(player => {
          if (!!player && !!player.newestMatch && moment(player.newestMatch).isBefore(minsAgo)) {
            context.params.fallbackFrom = player.newestMatch;
          } else {
            const weekAgo = moment().subtract(7, 'days')
            context.params.fallbackFrom = weekAgo.toISOString();
          }
        })
        .then(() => context);
    }
    return context;
  };
};
