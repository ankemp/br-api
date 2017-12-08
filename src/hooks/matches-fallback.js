// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brapi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

function _find(options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!!context.result.data.length) {
      const response = await brapi.searchMatches(context.params.query);
      const match = map.matches(response);
      context.result.data = match;
    }
    return context;
  };
}

function _get(options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!!context.result.data.length && !!context.id) {
      const response = await brapi.getMatch(context.id);
      const match = map.match(response);
      context.result.data = match;
    }
    return context;
  };
}

module.exports = {
  find: _find,
  get: _get
};
