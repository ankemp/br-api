const fetch = require('../fetch');

module.exports = function (playerId) {
  return fetch(`players/${playerId}`);
}
