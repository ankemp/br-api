const { setNow, populate } = require('feathers-hooks-common');
const playersFallback = require('../../hooks/players-fallback');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [playersFallback()],
    create: [setNow('createdAt'), setNow('updatedAt')],
    update: [
      setNow('updatedAt')
    ],
    patch: [
      setNow('updatedAt')
    ],
    remove: []
  },

  after: {
    all: [],
    find: [],
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
