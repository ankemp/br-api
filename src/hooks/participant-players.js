// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.data && !!context.app) {
      const participants = context.data;
      const playersService = context.app.service('players');
      return Promise.all(participants.map(participant => {
        return playersService.get(participant.player.id)
          .catch(() => playersService.create(participant.player))
      }))
        .then(() => context);
    }
    return context;
  };
};
