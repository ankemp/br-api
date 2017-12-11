const common = require('feathers-hooks-common');
const matchesFallback = require('../../hooks/matches-fallback');
const matchesRosters = require('../../hooks/matches-rosters');
const rosterParticipants = require('../../hooks/rosters-participants');
const defaultSort = require('../../hooks/default-sort');

module.exports = {
  before: {
    all: [],
    find: [defaultSort()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [matchesFallback(),matchesRosters()],
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
