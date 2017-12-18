// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const _ = require('lodash');
const moment = require('moment');
const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

function getPlayerData(playerId) {
  return brApi.getPlayer(playerId)
    .then(response => map.player(response))
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app) {
      const sequelizeClient = context.app.get('sequelizeClient');
      const playersService = context.app.service('players');

      if (_.isUndefined(context.params.fallbackFrom)) {
        if (context.type === 'before') {
          return sequelizeClient.models.players
            .findAndCount({ where: { id: context.id } })
            .then(({ count }) => count !== 0)
            .then(exists => {
              if (!exists) {
                return getPlayerData(context.id)
                  .then(player => playersService.create(player))
                  .then(player => {
                    context.result = {};
                    context.result.data = player;
                    return;
                  })
                  .then(() => context);
              }
            });
        }

        if (context.type === 'after') {
          const exists = !!context.result.id;
          if (exists) {
            const updatedAt = moment(context.result.updatedAt);
            const now = moment().subtract(6, 'hours');
            if (!!!context.result.name || updatedAt.isBefore(now)) {
              return getPlayerData(context.id)
                .then(player => playersService.patch(context.id, player))
                .then(player => {
                  context.result = {};
                  context.result.data = player;
                  return;
                })
                .then(() => context);
            }
          }
        }
      }

    }
    return context;
  };
};
