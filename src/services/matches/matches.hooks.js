const { setNow, populate } = require('feathers-hooks-common');
const matchesFallback = require('../../hooks/matches-fallback');
const defaultSort = require('../../hooks/default-sort');
const shouldFallback = require('../../hooks/should-fallback');

const matchesSchema = {
  include: [
    { service: 'maps', nameAs: 'map', parentField: 'mapId', childField: 'id' },
    { service: 'rounds', parentField: 'id', childField: 'matchId' },
    {
      service: 'rosters', parentField: 'id', childField: 'matchId',
      include: {
        service: 'participants', parentField: 'id', childField: 'rosterId',
        include: [
          { service: 'players', nameAs: 'player', parentField: 'playerId', childField: 'id' },
          { service: 'champions', nameAs: 'champion', parentField: 'championId', childField: 'id' }
        ],
      }
    }
  ]
};

module.exports = {
  before: {
    all: [],
    find: [defaultSort(), (context) => console.log(context.method + ' match ' + JSON.stringify(context.params))],
    get: [(context) => console.log(context.method + ' match ' + context.id)],
    create: [setNow('updatedAt')],
    update: [setNow('updatedAt')],
    patch: [setNow('updatedAt')],
    remove: []
  },

  after: {
    all: [],
    find: [
      shouldFallback(),
      matchesFallback(),
      populate({ schema: matchesSchema }),
    ],
    get: [
      populate({ schema: matchesSchema }),
    ],
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
