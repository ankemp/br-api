const { setNow, populate, paramsFromClient } = require('feathers-hooks-common');
const teamsFallback = require('../../hooks/teams-fallback');
const teamMemberPopulate = require('../../hooks/team-member-populate');

module.exports = {
  before: {
    all: [],
    find: [],
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
    create: [teamMemberPopulate()],
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
