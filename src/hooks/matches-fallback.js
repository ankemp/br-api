// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brapi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!!context.result.data.length) {
      const response = await brapi.searchMatches(context.params.query);
      const matches = map.matches(response);
      context.result.data = matches;
      context.result.total = matches.length;
    }
    return context;
  };
};
