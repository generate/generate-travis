'use strict';

var path = require('path');
var isValid = require('is-valid-app');

module.exports = function(app) {
  // returns false if `app` if generator is already registered
  if (!isValid(app, 'generate-travis')) return;

  /**
   * Generate a `.travis.yml` file to the current working directory.
   *
   * ```sh
   * $ gen travis
   * ```
   * @name travis
   * @api public
   */

  app.task('travis', { silent: true }, function(cb) {
    return app.src('_travis.yml', {cwd: path.resolve(__dirname, 'templates')})
      .pipe(app.dest(function(file) {
        file.basename = '.travis.yml';
        return app.cwd;
      }));
  });

  /**
   * The default task is an alias that enables Generate's CLI to run the [travis](#travis)
   * task with the following command:
   *
   * ```sh
   * $ gen travis
   * ```
   * @name default
   */

  app.task('default', ['travis']);
};
