// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const _ = require('lodash');
const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

function savePlayers(app, players) {
  const playersService = app.service('players');
  return playersService.create(players);
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.data && !!context.app) {
      const sequelizeClient = context.app.get('sequelizeClient');
      let participants = context.data;
      participants = _.flatten(participants);
      const playerIds = participants.map(({ player }) => player.id);

      return Promise.all(
        playerIds.map(async id => await sequelizeClient.models.players
          .findAndCount({ where: { id: id } })
          .then(({ count }) => count === 0 ? id : undefined)
        ))
        .then(playerIds => playerIds.filter(Boolean))
        .then(playerIds => {
          console.log(playerIds);
          return brApi.getPlayers({ playerIds })
            .then(response => map.players(response));
        })
        .then(players => savePlayers(context.app, players))
        .then(() => context);
    }
    return context;
  };
};
