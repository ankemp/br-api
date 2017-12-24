const { setNow, populate } = require('feathers-hooks-common');
const teamsFallback = require('../../hooks/teams-fallback');

module.exports = {
  before: {
    all: [],
    find: [teamsFallback()],
    get: [],
    create: [setNow('createdAt'), setNow('updatedAt')],
    update: [setNow('updatedAt')],
    patch: [setNow('updatedAt')],
    remove: []
  },

  after: {
    all: [],
    find: [],
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
