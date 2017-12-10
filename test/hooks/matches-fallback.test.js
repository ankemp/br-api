const assert = require('assert');
const matchesFallback = require('../../src/hooks/matches-fallback');

describe('\'matches-fallback\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = matchesFallback();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });

  it('gets matches from brAPI when result.data is empty', () => {
    const mock = {
      params: {
        query: {
          count: 1
        },
      },
      result: {
        data: [],
      },
    };
    const hook = matchesFallback();

    return hook(mock).then(result => {
      assert.equal(result.result.data.length, 1, 'Returns the expected hook object');
    });
  })
});
