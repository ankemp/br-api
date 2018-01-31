const { populate, paramsFromClient } = require('feathers-hooks-common');
const shouldFallback = require('../../hooks/should-fallback');
const teamsFallback = require('../../hooks/teams-fallback');
const pluckTeams = require('../../hooks/pluck-teams');

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
    all: [],
    find: [
      pluckTeams(),
      shouldFallback({ service: 'teams' }),
      teamsFallback(),
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
