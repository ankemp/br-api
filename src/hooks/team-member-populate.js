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
        .then(async players => {
          await Promise.map(players, player => {
            return sequelizeClient.models.players.findOrCreate({ where: { id: player.id }, defaults: player })
          })
          return players;
        })
        .then(async players => {
          await Promise.map(teamMembers, tm => {
            return sequelizeClient.models.teamMembers.findOrCreate({ where: { ...tm } });
          });
          return players;
        })
        .then(players => {
          context.result.players = _.map(players, p => _.pick(p, ['id', 'name']));
          return context;
        });
    }

    return context
  };
};
