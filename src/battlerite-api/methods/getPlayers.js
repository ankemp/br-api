const fetch = require('../fetch');
const { queryArray } = require('../utils');

module.exports = function (filters, count = 5) {
  let params = {};
  if (filters.playerIds) {
    params['filter[playerIds]'] = queryArray(filters.playerIds);
  }

  if (filters.playerNames) {
    params['filter[playerNames]'] = queryArray(filters.playerNames);
  }

  const options = { qs: params };
  return fetch('players', options);
}
