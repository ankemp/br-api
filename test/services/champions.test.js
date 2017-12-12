const assert = require('assert');
const app = require('../../src/app');

describe('\'champions\' service', () => {
  it('registered the service', () => {
    const service = app.service('champions');

    assert.ok(service, 'Registered the service');
  });
});
