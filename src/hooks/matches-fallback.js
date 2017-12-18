// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const Promise = require('bluebird');
const _ = require('lodash');
const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

function saveMatches(app, matches) {
  const matchesService = app.service('matches');
  const sequelizeClient = app.get('sequelizeClient');

  return Promise.mapSeries(matches, match => {
    const { rounds, rosters } = match;

    return sequelizeClient.models.matches
      .findAndCount({ where: { id: match.id } })
      .then(({ count }) => count !== 0)
      .then(exists => !exists ? matchesService.create(match) : false)
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
      })
  })
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && context.method === 'find') {
      if (!_.isUndefined(context.params.fallbackFrom) && _.isUndefined(context.params.query.id)) {
        let params = Object.assign({}, { fromDate: context.params.fallbackFrom, playerIds: context.params.query.playerId });
        return brApi.searchMatches(params)
          .then(response => {
            if (!!response) {
              const fromAPI = map.matches(response);
              const fromDB = context.result.data;
              const difference = _.differenceBy(fromAPI, fromDB, 'id');
              context.result.data = _.take(_.sortBy(_.concat(difference, fromDB), 'createdAt'), 10);
              context.result.total = context.result.data.length;
              return saveMatches(context.app, difference).then(() => context);
            }
            return context;
          })
          .catch(error => {
            console.error('API ERROR: ', error.statusCode);
            return context;
          })
      }
    }
    return context;
  };
};
