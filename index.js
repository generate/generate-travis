/*!
 * generate-travis (https://github.com/generate/generate-travis)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('generate-travis');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('generate-travis')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('travis', function() {
      debug('running travis');
      
    });
  };
};
