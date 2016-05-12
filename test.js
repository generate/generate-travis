'use strict';

require('mocha');
var assert = require('assert');
var travis = require('./');

describe('generate-travis', function() {
  it('should export a function', function() {
    assert.equal(typeof travis, 'function');
  });

  it('should export an object', function() {
    assert(travis);
    assert.equal(typeof travis, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      travis();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
