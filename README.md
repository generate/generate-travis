# generate-travis [![NPM version](https://img.shields.io/npm/v/generate-travis.svg?style=flat)](https://www.npmjs.com/package/generate-travis) [![NPM downloads](https://img.shields.io/npm/dm/generate-travis.svg?style=flat)](https://npmjs.org/package/generate-travis) [![Build Status](https://img.shields.io/travis/generate/generate-travis.svg?style=flat)](https://travis-ci.org/generate/generate-travis)

Generate a .travis.yml file to the cwd or specified directory. Install globally and run with generate's CLI, or use as a component in your own generator.

## What is generate?

Generate is a new, open source developer framework for rapidly initializing and scaffolding out new code projects, offering an intuitive CLI, and a powerful and expressive API that makes it easy and enjoyable to use.

Visit the [getting started guide](https://github.com/generate/getting-started) or the [generate](https://github.com/generate/generate) project and documentation to learn more.

## tldr

To use the CLI, install [generate](https://github.com/generate/generate) if it isn't already installed:

```sh
$ npm install --global generate
```

Install the `generate-travis` generator:

```sh
$ npm install --global generate-travis
```

Run `generate-travis` to generate a `.travis.yml` file:

```sh
$ gen travis
```

## CLI

**Installing the CLI**

To run the `travis` generator from the command line, you'll need to install [generate](https://github.com/generate/generate) globally first. You can that now with the following command:

```sh
$ npm install generate --global 
```

This adds the `gen` command to your system path, allowing it to be run from any directory. Visit the [generate](https://github.com/generate/generate) project and documentation to learn more.

**Run the `travis` generator from the command line**

Once both [generate](https://github.com/generate/generate) and `generate-travis` are installed globally, you can run the generator with the following command:

```sh
$ gen travis
```

### [travis:travis-yml](generator.js#L20)

Generates a `.travis.yml` file in the current working directory.

**Example**

```sh
$ gen travis:travis-yml
```

### [travis:default](generator.js#L38)

Alias to enable running the [travis-yml](#travis-yml) task with the following command:

**Example**

```sh
$ gen travis
```

## Docs

### CLI

**Installing the CLI**

To run the `travis` generator from the command line, you'll need to install [generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm i -g generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Help**

Get general help and a menu of available commands:

```sh
$ gen help
```

**Running the `travis` generator**

Once both [generate](https://github.com/generate/generate) and `generate-travis` are installed globally, you can run the generator with the following command:

```sh
$ gen travis
```

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

### API

This updater can also be used as a node.js library in your own updater. To do so you must first install generate-travis locally.

**Install**

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save generate-travis
```

**Use as a plugin in your generator**

Use as a plugin if you want to extend your own generator with the features, settings and tasks of generate-travis, as if they were created on your generator.

In your `generator.js`:

```js
module.exports = function(app) {
  app.use(require('generate-travis'));

  // specify any tasks from generate-travis. Example:
  app.task('default', ['travis']);
};
```

**Use as a sub-generator**

Use as a sub-generator if you want expose the features, settings and tasks from generate-travis on a _namespace_ in your generator.

In your `generator.js`:

```js
module.exports = function(app) {
  // register the generate-travis generator (as a sub-generator with an arbitrary name)
  app.register('foo', require('generate-travis'));

  app.task('minify', function(cb) {
    // minify some stuff
    cb();
  });

  // run the "default" task on generate-travis (aliased as `foo`), 
  // then run the `minify` task defined in our generator
  app.task('default', function(cb) {
    app.generate(['foo:default', 'minify'], cb);
  });
};
```

Tasks from `generate-travis` will be available on the `foo` namespace from the API and the command line. Continuing with the previous code example, to run the `default` task on `generate-travis`, you would run `gen foo:default` (or just `gen foo` if `foo` does not conflict with an existing task on your generator).

To learn more about namespaces and sub-generators, and how they work, [visit the getting started guide](https://github.com/generate/getting-started).

## Contributing

This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new). Or visit the [verb-readme-generator](https://github.com/verbose/verb-readme-generator) project to submit bug reports or pull requests for the readme layout template.

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on June 13, 2016._