const { setNow, populate,paramsFromClient } = require('feathers-hooks-common');
const teamsFallback = require('../../hooks/teams-fallback');
const teamMemberPopulate = require('../../hooks/team-member-populate');

const teamSchema = {
  include: [
    {
        service: 'teamMembers', parentField: 'teamId', childField: 'id'
    }
  ]}


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
    find: [populate({ schema: teamSchema })],
    get: [populate({ schema: teamSchema })],
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
