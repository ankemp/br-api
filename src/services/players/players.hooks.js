const { setNow, populate } = require('feathers-hooks-common');
const playersFallback = require('../../hooks/players-fallback');

module.exports = {
  before: {
    all: [],
    find: [],
    // get: [playersFallback()],
    get: [],
    create: [setNow('createdAt'), setNow('updatedAt')],
    update: [],
    patch: [],
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
