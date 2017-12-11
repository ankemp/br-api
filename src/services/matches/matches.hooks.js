const matchesFallback = require('../../hooks/matches-fallback');
const defaultSort = require('../../hooks/default-sort');

module.exports = {
  before: {
    all: [],
    find: [defaultSort()],
    get: [],
    create: [
      common.disallow('external')
    ],
    update: [
      common.disallow('external')
    ],
    patch: [
      common.disallow('external')
    ],
    remove: [
      common.disallow('external')
    ]
  },

  after: {
    all: [],
    find: [matchesFallback()],
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
