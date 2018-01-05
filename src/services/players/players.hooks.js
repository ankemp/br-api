const { setNow, populate } = require('feathers-hooks-common');
const playersFallback = require('../../hooks/players-fallback');
const playerSearchFallback = require('../../hooks/player-search-fallback');
const logger = require('../../hooks/logger');

const playersSchema = {
  include: [
      {service: 'teamMembers', parentField: 'id', childField: 'playerId', useInnerPopulate: true  }
  ]}


module.exports = {
  before: {
    all: [],
    find: [],
    get: [playersFallback()],
    create: [setNow('createdAt'), setNow('updatedAt')],
    update: [setNow('updatedAt')],
    patch: [setNow('updatedAt')],
    remove: []
  },

  after: {
    all: [],
    find: [populate({ schema: playersSchema }),playerSearchFallback()],
    get: [populate({ schema: playersSchema }),playersFallback()],
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
