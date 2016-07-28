'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var generate = require('generate');
var npm = require('npm-install-global');
var del = require('delete');
var generator = require('..');
var app;

var actual = path.resolve.bind(path, __dirname, 'actual');

function exists(name, cb) {
  return function(err) {
    if (err) return cb(err);
    var filepath = actual(name);
    fs.stat(filepath, function(err, stat) {
      if (err) return cb(err);
      assert(stat);
      del(actual(), cb);
    });
  };
}

describe('generate-travis', function() {
  if (!process.env.CI && !process.env.TRAVIS) {
    before(function(cb) {
      npm.maybeInstall('generate', cb);
    });
  }

  before(function(cb) {
    del(actual(), cb);
  });
  after(function(cb) {
    del(actual(), cb);
  });

  beforeEach(function() {
    app = generate({silent: true});
    app.option('dest', actual());
    app.cwd = actual();
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
  });

  describe('tasks', function() {
    beforeEach(function() {
      app.use(generator);
    });

    it('should extend tasks onto the instance', function() {
      assert(app.tasks.hasOwnProperty('default'));
      assert(app.tasks.hasOwnProperty('travis'));
    });

    it('should run the `default` task with .build', function(cb) {
      app.build('default', exists('.travis.yml', cb));
    });

    it('should run the `default` task with .generate', function(cb) {
      app.generate('default', exists('.travis.yml', cb));
    });

    it('should run the `travis` task with .build', function(cb) {
      app.build('travis', exists('.travis.yml', cb));
    });

    it('should run the `travis` task with .generate', function(cb) {
      app.generate('travis', exists('.travis.yml', cb));
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

    it('should run the `travis` task', function(cb) {
      app.register('travis', generator);
      app.generate('travis:travis', exists('.travis.yml', cb));
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

    it('should run the `travis:travis` task', function(cb) {
      app.register('foo', function(foo) {
        foo.register('travis', generator);
      });
      app.generate('foo.travis:travis', exists('.travis.yml', cb));
    });

    it('should work with nested sub-generators', function(cb) {
      app
        .register('foo', generator)
        .register('bar', generator)
        .register('baz', generator)

      app.generate('foo.bar.baz', exists('.travis.yml', cb));
    });
  });
});
