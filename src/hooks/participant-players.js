// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const participants = context.data;
    const playersService = context.app.service('players');
    participants.forEach(participant => {
      playersService.get(participant.player.id)
        .catch(() => {
          playersService.create(participant.player.id);
        })
    });
    return context;
  };
};
