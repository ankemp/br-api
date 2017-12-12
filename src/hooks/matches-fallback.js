// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && context.method === 'find') {
      if (!!context.result && context.params.fallbackFrom) {
        context.params.query.fromDate = context.params.fallbackFrom;
        const response = await brApi.searchMatches(context.params.query || {});
        const matches = map.matches(response);
        const matchesService = context.app.service('matches');
        matches.forEach(match => {
          matchesService.get(match.id)
            .catch(() => {
              matchesService.create(match)
                .then(() => {
                  const rounds = match.rounds.map(round => {
                    round.matchId = match.id;
                    return round;
                  })
                  return context.app.service('rounds').create(rounds);
                })
                .then(() => {
                  const rosters = match.rosters.map(roster => {
                    roster.matchId = match.id;
                    return roster;
                  });
                  return context.app.service('rosters').create(rosters);
                });
            });
        })
        context.result.data = matches;
        context.result.total = matches.length;
      }
    }
    return context;
  };
};
