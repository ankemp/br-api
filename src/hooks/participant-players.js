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

      return brApi.getPlayers({ playerIds })
        .then(response => map.players(response))
        .then(players => {
          return Promise.all(
            players.map(async player => {
              return await sequelizeClient.models.players
                .findAndCount({ where: { id: player.id } })
                .then(({ count }) => count === 0)
                .then(cont => {
                  if (cont) {
                    return playersService.create(player);
                  }
                  return playersService.patch(player.id, player);
                })
            })
          )
        })
        .then(() => context);
    }
    return context;
  };
};
