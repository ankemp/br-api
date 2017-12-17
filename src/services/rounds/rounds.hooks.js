const { setNow, populate } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setNow('updatedAt')],
    update: [setNow('updatedAt')],
    patch: [setNow('updatedAt')],
    remove: []
  },

  after: {
    all: [],
    find: [
      populate({ schema: { include: { service: 'matches', parentField: 'matchId', childField: 'id' } } }),
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
