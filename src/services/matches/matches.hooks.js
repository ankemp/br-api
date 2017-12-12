const { setNow, populate } = require('feathers-hooks-common');
const matchesFallback = require('../../hooks/matches-fallback');
const defaultSort = require('../../hooks/default-sort');
const matchesFallback = require('../../hooks/matches-fallback');

module.exports = {
  before: {
    all: [],
    find: [defaultSort()],
    get: [],
    create: [
      setNow('updatedAt'),
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      matchesFallback(),
      populate({ schema: { include: { service: 'maps', parentField: 'mapId', childField: 'id' } } }),
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
