// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const _ = require('lodash');
const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.data && !!context.app) {
      const sequelizeClient = context.app.get('sequelizeClient');
      let participants = context.data;
      participants = _.flatten(participants);
      const playerIds = participants.map(({ player }) => player.id);
      const playersService = context.app.service('players');

      return Promise.all(
        playerIds.map(async id => {
          return await sequelizeClient.models.players
            .findAndCount({ where: { id: id } })
            .then(({ count }) => count !== 0)
            .then(exists => {
              if (!exists) {
                return playersService.create({ id });
              }
              return Promise.resolve();
            })
        })
      )
        .then(() => context);
    }
    return context;
  };
};
