// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && context.method === 'find') {
      if (!!context.params.fallbackFrom) {
        let params = Object.assign({}, { fromDate: context.params.fallbackFrom });
        const response = await brApi.searchMatches(params || {});
        const matches = map.matches(response);
        const matchesService = context.app.service('matches');
        return Promise.all(matches.map(match => {
          const { rounds, rosters } = match;
          matchesService.get(match.id)
            .catch(() => {
              matchesService.create(match)
                .then(() => {
                  return context.app
                    .service('rounds')
                    .create(rounds.map(round => {
                      round.matchId = match.id;
                      return round;
                    }));
                })
                .then(() => {
                  return context.app
                    .service('rosters')
                    .create(rosters.map(roster => {
                      roster.matchId = match.id;
                      return roster;
                    }));
                });
            });
        }))
          .then(() => context);
      }
    }
    return context;
  };
};
