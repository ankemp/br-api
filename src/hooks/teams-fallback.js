// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const Promise = require('bluebird');
const _ = require('lodash');
const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

function getTeamData({ playerIds, season }) {
  return brApi.getTeams({ playerIds, season })
    .then(response => response.data);
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && _.isUndefined(context.params.fallbackFrom)) {
      const sequelizeClient = context.app.get('sequelizeClient');
      const teamsService = context.app.service('teams');

      const { name, playerIds, season } = context.params.query;

      if (context.type === 'before') {
        return getTeamData({ playerIds, season })
          .then(teams => {
            context.result = {};
            context.result.data = teams;
            context.result.total = teams.length;
            context.result.limit = teams.length;
            context.result.skip = 0;
            return context;
          });
      }

      if (context.type === 'after') {
        // Need to finish DB setup first.
      }
    }
    return context;
  };
};
