const assert = require('assert');
const matchesFallback = require('../../src/hooks/matches-fallback');

describe('\'matches-fallback\' hook', () => {
  it('runs the hook on GET', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = matchesFallback.get();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });

  it('runs the hook on FIND', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = matchesFallback.find();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
