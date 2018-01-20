const _ = require('lodash');
const fetch = require('../fetch');
const { queryArray } = require('../utils');

module.exports = function (filters) {
  if (_.isObject(filters)) {
    let params = {};
    if (filters.playerIds) {
      params['filter[playerIds]'] = queryArray(filters.playerIds);
    }
    if (filters.playerNames) {
      params['filter[playerNames]'] = queryArray(filters.playerNames);
    }
    if (filters.teamNames) {
      params['filter[teamNames]'] = queryArray(filters.teamNames);
    }
    if (filters.gamemode) {
      params['filter[gamemode]'] = queryArray(filters.gamemode);
    }
    if (filters.fromDate) {
      params['filter[createdAt-start]'] =
        typeof filters.fromDate === 'string'
          ? filters.fromDate
          : (filters.fromDate).toISOString();
    }

    if (filters.toDate) {
      params['filter[createdAt-end]'] =
        typeof filters.toDate === 'string'
          ? filters.toDate
          : (filters.toDate).toISOString();
    } else {
      const now = new Date();
      params['filter[createdAt-end]'] = now.toISOString();
    }

    params['page[limit]'] = filters.count || 10;
    params['sort'] = '-createdAt';

    const options = { qs: params };
    return fetch(`matches`, options);
  }

  // Direct get (from URL)
  return fetch(filters);
}
