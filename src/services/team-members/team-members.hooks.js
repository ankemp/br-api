const { populate } = require('feathers-hooks-common');
const teamSchema = {
  include: [
    {
        service: 'teams', parentField: 'teamId', childField: 'id'
    }
  ]}


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
    find: [ populate({ schema: teamSchema }),],
    get: [ populate({ schema: teamSchema }),],
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
