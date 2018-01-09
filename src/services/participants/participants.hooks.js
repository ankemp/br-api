const { setNow, populate, paramsFromClient } = require('feathers-hooks-common');
const defaultSort = require('../../hooks/default-sort');
const participantPlayers = require('../../hooks/participant-players');
const shouldFallback = require('../../hooks/should-fallback');
const matchesFallback = require('../../hooks/matches-fallback');
const pluckMatches = require('../../hooks/pluck-matches');
const setNewestMatch = require('../../hooks/set-newest-match');

const matchesSchema = {
  include: [
    { service: 'matches', nameAs: 'match', parentField: 'matchId', childField: 'id', useInnerPopulate: true },
  ]
};

module.exports = {
  before: {
    all: [],
    find: [defaultSort(), paramsFromClient('fallbackFrom')],
    get: [],
    create: [setNow('updatedAt'), participantPlayers()],
    update: [setNow('updatedAt')],
    patch: [setNow('updatedAt')],
    remove: []
  },

  after: {
    all: [],
    find: [
      populate({ schema: matchesSchema }),
      pluckMatches(),
      shouldFallback({ service: 'matches' }),
      matchesFallback(),
      setNewestMatch()
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
