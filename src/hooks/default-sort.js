// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.params && !!context.params.query) {
      context.params.query.$sort = context.params.query.$sort || { createdAt: -1 };
    }
    return context;
  };
};
