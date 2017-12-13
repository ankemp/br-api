// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.params && !!!context.params.fallbackFrom) {
      const timestamp = !!context.result.data && !!context.result.data[0]
        ? new Date(context.result.data[0].createdAt)
        : undefined;
      const minsAgo = new Date();
      minsAgo.setMinutes(minsAgo.getMinutes() - 20);
      if (!!!timestamp || minsAgo > timestamp) {
        context.params.fallbackFrom = timestamp || minsAgo;
      } else {
        context.params.fallbackFrom = undefined;
      }
      console.log('fallbackFrom', context.params.fallbackFrom);
    }
    return context;
  };
};
