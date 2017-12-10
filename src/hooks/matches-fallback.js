// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.result && !!!context.result.data.length) {
      console.log(context.params.query);
      const response = await brApi.searchMatches(context.params.query || {});
      const matches = map.matches(response);
      if (!!context.app) {
        matches.forEach(match => {
          context.app.services.matches.create(match);
        });
      }
      context.result.data = matches;
      context.result.total = matches.length;
    }
    return context;
  };
};
