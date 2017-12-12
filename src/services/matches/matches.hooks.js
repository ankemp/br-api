const { setNow, populate } = require('feathers-hooks-common');
const matchesFallback = require('../../hooks/matches-fallback');
const defaultSort = require('../../hooks/default-sort');
const matchesFallback = require('../../hooks/matches-fallback');

const matchesSchema = {
  include: [
    { service: 'maps', nameAs: 'map', parentField: 'mapId', childField: 'id' },
    { service: 'rounds', parentField: 'id', childField: 'matchId' },
    {
      service: 'rosters', parentField: 'id', childField: 'matchId',
      include: {
        service: 'participants', parentField: 'id', childField: 'rosterId',
        include: { service: 'players', parentField: 'playerId', childField: 'id' }
      }
    }
  ]
};

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
      populate({ schema: matchesSchema }),
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
