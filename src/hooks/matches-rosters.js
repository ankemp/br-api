// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    
    if (context.result && context.result.data.length) {
      var matches =context.result.data;
      matches.forEach(match => {
        
        if(match.rosters){
          var rosters = map.generic(match.rosters);
          
          rosters.forEach(roster => {
            context.app.services.rosters.create(roster);
          });
          context.rosters = rosters;
        }
      });
      return context;
    }
  };
};
