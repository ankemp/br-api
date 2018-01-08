// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const Promise = require('bluebird');
const _ = require('lodash');
const moment = require('moment');
const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

function getTeamData({ playerId, season }) {
  return brApi.getTeams({ playerIds:playerId, season:season })
    .then(response => map.teams(response));
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && _.isUndefined(context.params.fallbackFrom)) {

      const seasonNum = 6;
      const sequelizeClient = context.app.get('sequelizeClient');
      const teamsService = context.app.service('teams');

      const { name, playerId, season } = context.params.query;

      if (context.type === 'before') {
        // return getTeamData({ playerId, season:6 })
        //   .then(teams => {
        //     context.result = {};
        //     context.result.data = teams;
        //     context.result.total = teams.length;
        //     context.result.limit = teams.length;
        //     context.result.skip = 0;
        //     return context;
        //   });
      }

      if (context.type === 'after') {
        var exists = context.result.data.length > 0;
          if (exists) {
            const lastUpdate = context.result.data.reduce(function (a, b) { return a.updatedAt > b.updatedAt ? a.updatedAt : b.updatedAt; })
            const updatedAt = moment(lastUpdate);
            const now = moment().subtract(1, 'hours');
            if (updatedAt.isBefore(now)) {
              return getTeamData({ playerId, season: seasonNum })
              .then(teams=> {
                return Promise.map(teams, team => {
                  return sequelizeClient.models.teams
                  .findAndCount({ where: { id: team.id } })
                  .then(({ count }) => count !== 0)
                  .then(exists => {
                    if (!exists) {
                      return teamsService.create(team);
                    }
                    else{
                      return teamsService.patch(team.id,team);
                    }
                  })
                })
                .then(teams=>{
                  context.result = {};
                  context.result.data = teams;
                  context.result.total = teams.length;
                  context.result.limit = teams.length;
                  context.result.skip = 0;
                  return context;
                })
              })
            }
          }
          else{
            return getTeamData({ playerId, season: seasonNum })
            .then(teams => teamsService.create(teams))
              .then(teams => {
              context.result = {};
              context.result.data = teams;
              context.result.total = teams.length;
              context.result.limit = teams.length;
              context.result.skip = 0;
              return context;
            });
        }
      }
      return context;
    };
  }
}