const assert = require('assert');
const app = require('../../src/app');

describe('\'teamMembers\' service', () => {
  it('registered the service', () => {
    const service = app.service('teamMembers');

    assert.ok(service, 'Registered the service');
  });
});
