const assert = require('assert');
const pluckMatches = require('../../src/hooks/pluck-matches');

describe('\'pluckMatches\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = pluckMatches();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });

  it('plucks matches from parent', () => {
    // A mock hook object
    const mock = {
      result: {
        data: [
          { matches: [{ id: 123 }, { id: 321 }] }
        ]
      }
    };
    // Initialize our hook with no options
    const hook = pluckMatches();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      const plucked = {
        result: {
          data: [{ id: 123 }, { id: 321 }]
        }
      };
      assert.deepEqual(result, mock, 'Returns the expected hook object');
    });
  });
});
