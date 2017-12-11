const common = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [
    ],
    create: [
      common.disallow('external')
    ],
    update: [
      common.disallow('external')
    ],
    patch: [
      common.disallow('external')
    ],
    remove: [
      common.disallow('external')
    ]
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
