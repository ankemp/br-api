const matchesFallback = require('../../hooks/matches-fallback');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
    ],
    find: [matchesFallback.find()],
    get: [matchesFallback.get()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [matchesFallback.get()],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
