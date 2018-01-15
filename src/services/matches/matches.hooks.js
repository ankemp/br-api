const { setNow, populate } = require('feathers-hooks-common');
const defaultSort = require('../../hooks/default-sort');

const matchesSchema = {
  include: [
    { service: 'maps', nameAs: 'map', parentField: 'mapId', childField: 'id' },
    { service: 'rounds', parentField: 'id', childField: 'matchId' },
    {
      service: 'rosters', parentField: 'id', childField: 'matchId', asArray: true,
      include: {
        service: 'participants', parentField: 'id', childField: 'rosterId', asArray: true,
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
    find: [defaultSort()],
    get: [],
    create: [setNow('updatedAt')],
    update: [setNow('updatedAt')],
    patch: [setNow('updatedAt')],
    remove: []
  },

  after: {
    all: [],
    find: [
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
