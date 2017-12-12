// Application hooks that run for every service
const logger = require('./hooks/logger');
const common = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [logger()],
    find: [],
    get: [],
    create: [common.disallow('external')],
    update: [common.disallow('external')],
    patch: [common.disallow('external')],
    remove: [common.disallow('external')]
  },

  after: {
    all: [logger()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [logger()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
