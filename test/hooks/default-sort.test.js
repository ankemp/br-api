const assert = require('assert');
const defaultSort = require('../../src/hooks/default-sort');

describe('\'defaultSort\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = defaultSort();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });

  it('set to default sort', () => {
    const mock = {
      params: {
        query: {
          '$sort': undefined
        }
      }
    };
    const hook = defaultSort();

    return hook(mock).then(result => {
      assert.equal(result.params.query.$sort.createdAt, -1, 'Returns the expected hook object');
    });
  });

  it('sort unchanged', () => {
    const mock = {
      params: {
        query: {
          '$sort': {
            createdAt: 1
          }
        }
      }
    };
    const hook = defaultSort();

    return hook(mock).then(result => {
      assert.equal(result.params.query.$sort.createdAt, 1, 'Returns the expected hook object');
    });
  });
});
