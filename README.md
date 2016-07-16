# generate-travis [![NPM version](https://img.shields.io/npm/v/generate-travis.svg?style=flat)](https://www.npmjs.com/package/generate-travis) [![NPM downloads](https://img.shields.io/npm/dm/generate-travis.svg?style=flat)](https://npmjs.org/package/generate-travis) [![Build Status](https://img.shields.io/travis/generate/generate-travis.svg?style=flat)](https://travis-ci.org/generate/generate-travis)

Generate a .travis.yml file to the cwd or specified directory. Install globally and run with generate's CLI, or use as a component in your own generator.

## What is generate?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/generators.md) and [tasks](https://github.com/generate/generate/blob/master/docs/tasks.md). Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](http://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

For more information about Generate:

* Visit the [generate project](https://github.com/generate/generate)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

## tldr

**Install generate**

To use [generate](https://github.com/generate/generate) from the command line, it must first be installed globally with npm:

```sh
$ npm install --global generate
```

**Install `generate-travis`**

Next, install this generator:

```sh
$ npm install --global generate-travis
```

**Run**

You should now be able to run this generator with the following command:

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

### [travis:travis](generator.js#L20)

Generates a `.travis.yml` file in the current working directory.

**Example**

```sh
$ gen travis:travis
```

### [travis:default](generator.js#L38)

Alias to enable running the [travis](#travis) task with the following command:

**Example**

```sh
$ gen travis
```

## CLI

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

## API

### Install locally

If you want to use `generate-travis` as a plugin or sub-generator to extend the features and settings in your own generator, you must first install it locally:

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save generate-travis
```

### Use as a plugin

Use as a [plugin](https://github.com/generate/generate/blob/master/docs/plugins.md) if you want to extend your own generator with the features, settings and tasks of `generate-travis`, as if they were created on your generator:

```js
module.exports = function(app) {
  app.use(require('generate-travis'));
};
```

Visit Generate's [plugin docs](https://github.com/generate/generate/blob/master/docs/plugins.md) to learn more about plugins.

### Use as a sub-generator

Use as a [sub-generator](https://github.com/generate/generate/blob/master/docs/generators.md) if you want to add `generate-travis` to a  _namespace_ in your generator:

```js
module.exports = function(app) {
  // register the generate-travis with whatever name you want
  app.register('foo', require('generate-travis'));
};
```

Visit Generate's [sub-generator docs](https://github.com/generate/generate/blob/master/docs/sub-generators.md) to learn more about sub-generators.

## About

### Related projects

* [generate-file](https://www.npmjs.com/package/generate-file): Generator for generating a single file from a template. | [homepage](https://github.com/generate/generate-file "Generator for generating a single file from a template.")
* [generate-git](https://www.npmjs.com/package/generate-git): Generator for initializing a git repository and adding first commit. | [homepage](https://github.com/generate/generate-git "Generator for initializing a git repository and adding first commit.")
* [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/generate/generate-travis/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 16, 2016._