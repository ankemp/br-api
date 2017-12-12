const assert = require('assert');
const shouldFallback = require('../../src/hooks/should-fallback');

describe('\'shouldFallback\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = shouldFallback();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });

  it('falbackFrom should be false', () => {
    const mock = {
      params: {
        query: {
          fallbackFrom: undefined
        }
      },
      result: {
        data: [
          { createdAt: new Date() }
        ]
      }
    };
    const hook = shouldFallback();

    return hook(mock).then(result => {
      mock.params.query.fallbackFrom = false;
      assert.deepEqual(result, mock, 'Returns the expected hook object');
    });
  });

  it('falbackFrom should be a date', () => {
    const timeAgo = new Date();
    timeAgo.setMinutes(timeAgo.getMinutes() - 45);
    const mock = {
      params: {
        query: {
          fallbackFrom: undefined
        }
      },
      result: {
        data: [
          { createdAt: timeAgo }
        ]
      }
    };
    const hook = shouldFallback();

    return hook(mock).then(result => {
      mock.params.query.fallbackFrom = timeAgo;
      assert.deepEqual(result, mock, 'Returns the expected hook object');
    });
  });

});
