// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.app && !!context.result) {
      const sequelizeClient = context.app.get('sequelizeClient');
      let teamIds = [];
      if (context.params.teamsShouldFallback) {
        teamIds = context.result.map(tm => tm.id);
      } else {
        teamIds = context.result.map(tm => tm.teamId);
      }

      return sequelizeClient.models.teams.findAll(
        {
          include: [{ model: sequelizeClient.models.players, attributes: ['id', 'name'] }],
          where: { id: teamIds }
        }
      )
        .then(data => {
          context.result = data.map(d => d.toJSON());
          return context;
        });

    }
    return context;
  };
};
