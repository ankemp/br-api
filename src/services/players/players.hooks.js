const common = require('feathers-hooks-common');
const playersFallback = require('../../hooks/players-fallback');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [playersFallback()],
    create: [],
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
