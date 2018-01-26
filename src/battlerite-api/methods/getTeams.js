const fetch = require('../fetch');
const { queryArray } = require('../utils');

module.exports = function (filters, count = 5) {
  let params = {};

  if (filters.playerIds) {
    params['filter[playerIds]'] = queryArray(filters.playerIds);
  }

  if (filters.season) {
    params['filter[season]'] = queryArray(filters.season);
  }

  const options = { qs: params };
  return fetch('teams', options);
}
