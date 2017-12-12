const common = require('feathers-hooks-common');
const matchesFallback = require('../../hooks/matches-fallback');
const defaultSort = require('../../hooks/default-sort');

module.exports = {
  before: {
    all: [],
    find: [defaultSort()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
