const { setNow, populate, paramsFromClient } = require('feathers-hooks-common');
const participantPlayers = require('../../hooks/participant-players');
const shouldFallback = require('../../hooks/should-fallback');
const pluckMatches = require('../../hooks/pluck-matches');

const matchesSchema = {
  include: [
    { service: 'matches', nameAs: 'matches', parentField: 'matchId', childField: 'id', useInnerPopulate: true },
  ]
};

module.exports = {
  before: {
    all: [],
    find: [paramsFromClient('fallbackFrom')],
    get: [],
    create: [setNow('createdAt'), setNow('updatedAt'), participantPlayers()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [shouldFallback(), populate({ schema: matchesSchema }), pluckMatches()],
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
