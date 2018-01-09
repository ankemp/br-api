// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const Promise = require('bluebird');
const _ = require('lodash');
const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

function getTeamData({ playerId, season }) {
  return brApi.getTeams({ playerIds: playerId, season })
    .then(response => map.teams(response));
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && !!context.result && context.params.teamsShouldFallback) {
      const sequelizeClient = context.app.get('sequelizeClient');
      const teamsService = context.app.service('teams');
      const seasonNum = 6;

      const { name, playerId, season } = context.params.query;

      return getTeamData({ playerId, season: seasonNum })
        .then(teams => {
          return Promise.map(teams, team => {
            return sequelizeClient.models.teams
              .findAndCount({ where: { id: team.id } })
              .then(({ count }) => count !== 0)
              .then(exists => {
                if (!exists) {
                  return teamsService.create(team);
                } else {
                  return teamsService.patch(team.id, team);
                }
              })
          })
            .then(teams => {
              context.result = {};
              context.result.data = teams;
              context.result.total = teams.length;
              context.result.limit = teams.length;
              context.result.skip = 0;
              return context;
            })
        })

    }

    return context;
  }
}
