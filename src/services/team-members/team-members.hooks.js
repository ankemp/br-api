const { populate, paramsFromClient } = require('feathers-hooks-common');
const teamsFallback = require('../../hooks/teams-fallback');
const teamSchema = {
  include: [
    {
        service: 'teams', parentField: 'teamId', childField: 'id'
    }
  ]}


module.exports = {
  before: {
    all: [],
    find: [teamsFallback()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [ populate({ schema: teamSchema }),teamsFallback()],
    get: [ populate({ schema: teamSchema }),teamsFallback()],
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
