// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');
const _ = require('lodash');
const Promise = require('bluebird');

function getPlayersData(playerIds) {
  return brApi.getPlayers({ playerIds })
    .then(response => map.players(response))
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {

    if (!!context.app && !!context.result) {
      const sequelizeClient = context.app.get('sequelizeClient');
      const teamMembersService = context.app.service('teamMembers');
      const playersService = context.app.service('players');

      const teamMembers = context.result.members.map(playerId => {
        return { playerId, teamId: context.result.id };
      });
      const playerIds = context.result.members;

      return getPlayersData(playerIds)
        .then(players => {
          return Promise.map(players, player => {
            return sequelizeClient.models.players
              .findAndCount({ where: { id: player.id } })
              .then(({ count }) => count !== 0)
              .then(exists => {
                if (!exists) {
                  return playersService.create(player);
                }
                return Promise.resolve();
              })
          })
        })
        .then(() => teamMembersService.create(teamMembers))
        .then(() => context);

    }

    return context
  };
};
