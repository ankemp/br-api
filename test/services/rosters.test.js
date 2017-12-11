const assert = require('assert');
const app = require('../../src/app');

describe('\'rosters\' service', () => {
  it('registered the service', () => {
    const service = app.service('rosters');

    assert.ok(service, 'Registered the service');
  });
});
