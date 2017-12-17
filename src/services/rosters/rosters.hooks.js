const { setNow, populate } = require('feathers-hooks-common');
const rosterParticipants = require('../../hooks/roster-participants');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setNow('updatedAt')],
    update: [setNow('updatedAt')],
    patch: [setNow('updatedAt')],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [rosterParticipants()],
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
