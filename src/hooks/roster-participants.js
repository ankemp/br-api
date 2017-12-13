// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.data && !!context.app) {
      const rosters = context.data;
      const playersService = context.app.service('players');
      rosters.forEach(roster => {
        const participants = roster.participants.map(participant => {
          participant.matchId = roster.matchId;
          participant.rosterId = roster.id;
          participant.playerId = participant.player.id || '1337_bot';
          return participant;
        });
        context.app.service('participants').create(participants);
      });
    }
    return context;
  };
};
