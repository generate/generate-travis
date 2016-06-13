'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var generate = require('generate');
var npm = require('npm-install-global');
var del = require('delete');
var generator = require('./');
var app;

var cwd = path.resolve.bind(path, __dirname, 'actual');

function exists(name, cb) {
  return function(err) {
    if (err) return cb(err);
    var filepath = cwd(name);
    fs.stat(filepath, function(err, stat) {
      if (err) return cb(err);
      assert(stat);
      del(path.dirname(filepath), cb);
    });
  };
}

describe('generate-travis', function() {
  if (!process.env.CI && !process.env.TRAVIS) {
    before(function(cb) {
      npm.maybeInstall('generate', cb);
    });
  }

  beforeEach(function() {
    app = generate({silent: true});
    app.cwd = cwd();
    app.option('dest', cwd());

    // pre-populate template data to avoid prompts from `ask` helper
    app.option('askWhen', 'not-answered');
    app.data({
      author: {
        name: 'Jon Schlinkert',
        username: 'jonschlnkert',
        url: 'https://github.com/jonschlinkert'
      },
      project: {
        name: 'foo',
        description: 'bar',
        version: '0.1.0'
      }
    });
  });

  describe('plugin', function() {
    it('should only register the plugin once', function(cb) {
      var count = 0;
      app.on('plugin', function(name) {
        if (name === 'generate-travis') {
          count++;
        }
      });
      app.use(generator);
      app.use(generator);
      app.use(generator);
      assert.equal(count, 1);
      cb();
    });

    it('should extend tasks onto the instance', function() {
      app.use(generator);
      assert(app.tasks.hasOwnProperty('default'));
      assert(app.tasks.hasOwnProperty('travis-yml'));
    });

    it('should run the `default` task with .build', function(cb) {
      app.use(generator);
      app.build('default', exists('.travis.yml', cb));
    });

    it('should run the `default` task with .generate', function(cb) {
      app.use(generator);
      app.generate('default', exists('.travis.yml', cb));
    });

    it('should run the `travis-yml` task with .build', function(cb) {
      app.use(generator);
      app.build('travis-yml', exists('.travis.yml', cb));
    });

    it('should run the `travis-yml` task with .generate', function(cb) {
      app.use(generator);
      app.generate('travis-yml', exists('.travis.yml', cb));
    });
  });

  if (!process.env.CI && !process.env.TRAVIS) {
    describe('generator (CLI)', function() {
      it('should run the default task using the `generate-travis` name', function(cb) {
        app.use(generator);
        app.generate('generate-travis', exists('.travis.yml', cb));
      });

      it('should run the default task using the `travis` generator alias', function(cb) {
        app.use(generator);
        app.generate('travis', exists('.travis.yml', cb));
      });
    });
  }

  describe('generator (API)', function() {
    it('should run the default task on the generator', function(cb) {
      app.register('travis', generator);
      app.generate('travis', exists('.travis.yml', cb));
    });

    it('should run the `travis-yml` task', function(cb) {
      app.register('travis', generator);
      app.generate('travis:travis-yml', exists('.travis.yml', cb));
    });

    it('should run the `default` task when defined explicitly', function(cb) {
      app.register('travis', generator);
      app.generate('travis:default', exists('.travis.yml', cb));
    });
  });

  describe('sub-generator', function() {
    it('should work as a sub-generator', function(cb) {
      app.register('foo', function(foo) {
        foo.register('travis', generator);
      });
      app.generate('foo.travis', exists('.travis.yml', cb));
    });

    it('should run the `default` task by default', function(cb) {
      app.register('foo', function(foo) {
        foo.register('travis', generator);
      });
      app.generate('foo.travis', exists('.travis.yml', cb));
    });

    it('should run the `travis:default` task when defined explicitly', function(cb) {
      app.register('foo', function(foo) {
        foo.register('travis', generator);
      });
      app.generate('foo.travis:default', exists('.travis.yml', cb));
    });

    it('should run the `travis:travis-yml` task', function(cb) {
      app.register('foo', function(foo) {
        foo.register('travis', generator);
      });
      app.generate('foo.travis:travis-yml', exists('.travis.yml', cb));
    });
  });
});
