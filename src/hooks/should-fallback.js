// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.params && !!context.params.query) {
      if (!!!context.params.query.fallbackFrom) {
        const timestamp = new Date(context.result.data[0].createdAt);
        const minsAgo = new Date();
        minsAgo.setMinutes(minsAgo.getMinutes() - 20);
        if (minsAgo > timestamp) {
          context.params.query.fallbackFrom = timestamp;
        } else {
          context.params.query.fallbackFrom = false;
        }
      }
    }
    return context;
  };
};
