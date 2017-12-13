// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.data && !!context.app) {
      const rosters = context.data;
      const playersService = context.app.service('players');
      return Promise.all(rosters.map(roster => {
        return context.app
          .service('participants')
          .create(roster.participants.map(participant => {
            participant.createdAt = roster.createdAt;
            participant.matchId = roster.matchId;
            participant.rosterId = roster.id;
            participant.playerId = participant.player.id || '1337_bot';
            return participant;
          }));
      }))
        .then(() => context);
    }
    return context;
  };
};
