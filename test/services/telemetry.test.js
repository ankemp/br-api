const assert = require('assert');
const app = require('../../src/app');

describe('\'telemetry\' service', () => {
  it('registered the service', () => {
    const service = app.service('telemetry');

    assert.ok(service, 'Registered the service');
  });
});
