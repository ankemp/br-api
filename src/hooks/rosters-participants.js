// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const brApi = require('../battlerite-api');
const map = require('../battlerite-api/entitymapper');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (context.rosters) {
      
      var rosters =context.rosters;
      rosters.forEach(roster => {
        
        if(roster.participants){
          var participants = map.generic(roster.participants);
          
          participants.forEach(participant => {
            console.log(participant);
            // context.app.services.participants.create(participant);
          });
        }
      });
      return context;
    }
  };
};
