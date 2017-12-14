// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

async function saveMatches(app, matches) {
  const matchesService = app.service('matches');
  const sequelizeClient = app.get('sequelizeClient');

  return Promise.all(
    matches.map(match => {
      const { rounds, rosters } = match;

      return sequelizeClient.models.matches
        .findAndCount({ where: { id: match.id } })
        .then(({ count }) => count === 0)
        .then(cont => cont ? matchesService.create(match) : false)
        .then(cont => {
          if (cont) {
            return app
              .service('rounds')
              .create(rounds.map(round => {
                round.createdAt = match.createdAt;
                round.matchId = match.id;
                return round;
              }))
          }
          return false;
        })
        .then(cont => {
          if (cont) {
            return app
              .service('rosters')
              .create(rosters.map(roster => {
                roster.createdAt = match.createdAt;
                roster.matchId = match.id;
                return roster;
              }));
          }
          return false;
        });
    })
  )
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && context.method === 'find') {
      if (!!context.params.fallbackFrom) {
        let params = Object.assign({}, { fromDate: context.params.fallbackFrom });
        const response = await brApi.searchMatches(params || {});
        const matches = map.matches(response);

        context.result.data = matches;
        context.result.total = matches.length;

        return saveMatches(context.app, matches).then(() => context);
      }
    }
    return context;
  };
};
