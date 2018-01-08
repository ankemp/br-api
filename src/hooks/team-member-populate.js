// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const map = require('../battlerite-api/entitymapper');
const _ = require('lodash');
const Promise = require('bluebird');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    
    if(context.result){
      const teamMembers = map.teamMembers({data:context.result});
      const sequelizeClient = context.app.get('sequelizeClient');
      const teamMembersService = context.app.service('teamMembers');
      const playersService = context.app.service('players');

      var playerIds = _.uniqBy(teamMembers.map(teamMember => teamMember.playerId)); 
      console.log(playerIds);
      
      return Promise.map(playerIds, id => {
        return sequelizeClient.models.players
          .findAndCount({ where: { id: id } })
          .then(({ count }) => count !== 0)
          .then(exists => {
            if (!exists) {
              return playersService.create({ id });
            }
            return Promise.resolve();
          })
      })
      .then(()=>{
        teamMembersService.create(teamMembers);
      })

      return context;
    }
  };
};
