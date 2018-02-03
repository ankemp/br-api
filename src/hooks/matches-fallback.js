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
      .count({ where: { id: match.id } })
      .then(count => count !== 0)
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

function getMatches(params, matches) {
  return new Promise((resolve, reject) => {
    brApi.searchMatches(params)
      .then(response => {
        if (!!response && response.data.length > 0) {
          const { next } = response.links;
          const newMatches = map.matches(response);
          matches = _.concat(matches, newMatches);
          if (!!next) {
            resolve(getMatches(next, matches));
          } else {
            resolve(matches);
          }
        }
      })
      .catch(() => resolve(matches));
  });
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && context.method === 'find') {
      if (!_.isUndefined(context.params.fallbackFrom) && _.isUndefined(context.params.query.id)) {

        const params = { fromDate: context.params.fallbackFrom, playerIds: context.params.query.playerId };
        const matches = _.stubArray();

        return getMatches(params, matches)
          .then(fromAPI => {
            const fromDB = context.result.data;
            const difference = _.differenceBy(fromAPI, fromDB, 'id');
            context.result.data = _.take(_.orderBy(_.concat(difference, fromDB), ['createdAt'], ['desc']), 10);
            context.result.total = context.result.total + difference.length;
            return saveMatches(context.app, difference).then(() => context);
          })
          .catch(error => {
            console.error(error);
            return Promise.resolve(context)
          })
      }
    }
    return context;
  };
};
