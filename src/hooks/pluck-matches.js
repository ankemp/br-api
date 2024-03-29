// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    if (!!context.result && !!context.result.data) {
      context.result.data = context.result.data.map(parent => parent.match)
    }
    return context;
  };
};
