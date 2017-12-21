const { setNow, populate } = require('feathers-hooks-common');
const playersFallback = require('../../hooks/players-fallback');
const playerSearchFallback = require('../../hooks/player-search-fallback');

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
    find: [playerSearchFallback()],
    get: [playersFallback()],
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
