const { setNow, populate } = require('feathers-hooks-common');
const participantPlayers = require('../../hooks/participant-players');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setNow('createdAt'), setNow('updatedAt'), participantPlayers()],
    update: [],
    patch: [],
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
