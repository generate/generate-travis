<p align="center">

<a href="https://github.com/generate/generate">
<img height="150" width="150" src="https://raw.githubusercontent.com/generate/generate/master/docs/logo.png">
</a>
</p>

Generate a .travis.yml file to the cwd or specified directory. Install globally and run with generate's CLI, or use as a component in your own generator.

# generate-travis

[![NPM version](https://img.shields.io/npm/v/generate-travis.svg?style=flat)](https://www.npmjs.com/package/generate-travis) [![NPM downloads](https://img.shields.io/npm/dm/generate-travis.svg?style=flat)](https://npmjs.org/package/generate-travis) [![Build Status](https://img.shields.io/travis/generate/generate-travis.svg?style=flat)](https://travis-ci.org/generate/generate-travis)

![generate-travis demo](https://raw.githubusercontent.com/generate/generate-travis/master/docs/demo.gif)

## Quickstart

**Install**

Install [generate](https://github.com/generate/generate) and `generate-travis`:

```sh
$ npm install --global generate generate-travis
```

**Generate a `.travis.yml` file**

```sh
$ gen travis
```

## Custom templates

Override the built-in template by adding a custom `.travis.yml` file to `~/templates/.travis.yml`.

## What is "Generate"?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/generators.md) and [tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](http://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

**For more information**:

* Visit the [generate project](https://github.com/generate/generate/)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

## Getting started

### Install

**Installing the CLI**

To run the `travis` generator from the command line, you'll need to install [Generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm install --global generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Install generate-travis**

Install this module with the following command:

```sh
$ npm install --global generate-travis
```

### Usage

Run this generator's `default` [task](https://github.com/generate/generate/blob/master/docs/tasks.md#default) with the following command:

```sh
$ gen travis
```

**What you should see in the terminal**

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

### Help

To see a general help menu and available commands for Generate's CLI, run:

```sh
$ gen help
```

## Tasks

All available tasks.

### [travis](generator.js#L20)

Generate a `.travis.yml` file to the current working directory.

**Example**

```sh
$ gen travis
```

Visit Generate's [documentation for tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

## Next steps

### Running unit tests

It's never too early to begin running unit tests. When you're ready to get started, the following command will ensure the project's dependencies are installed then run all of the unit tests:

```sh
$ npm install && test
```

### Publishing your generator

If you're tests are passing and you're ready to publish your generator to [npm](https://www.npmjs.com), you can do that now with the following command:

**Are you sure you're ready?!**

Let's go!

```sh
$ npm publish
```

## About

### Related projects

* [generate-file](https://www.npmjs.com/package/generate-file): Generator for generating a single file from a template. | [homepage](https://github.com/generate/generate-file "Generator for generating a single file from a template.")
* [generate-git](https://www.npmjs.com/package/generate-git): Generator for initializing a git repository and adding first commit. | [homepage](https://github.com/generate/generate-git "Generator for initializing a git repository and adding first commit.")
* [generate-package](https://www.npmjs.com/package/generate-package): Generate a package.json from a pre-defined or user-defined template. This generator can be used from… [more](https://github.com/generate/generate-package) | [homepage](https://github.com/generate/generate-package "Generate a package.json from a pre-defined or user-defined template. This generator can be used from the command line when globally installed, or as a plugin or sub-generator in your own generator.")
* [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")

### Community

Are you using [Generate](https://github.com/generate/generate) in your project? Have you published a [generator](https://github.com/generate/generate/blob/master/docs/generators.md) and want to share your project with the world?

Here are some suggestions!

* If you get like Generate and want to tweet about it, please feel free to mention `@generatejs` or use the `#generatejs` hashtag
* Show your love by starring [Generate](https://github.com/generate/generate) and `generate-travis`
* Get implementation help on [StackOverflow](http://stackoverflow.com/questions/tagged/generate) (please use the `generatejs` tag in questions)
* **Gitter** Discuss Generate with us on [Gitter](https://gitter.im/generate/generate)
* If you publish an generator, thank you! To make your project as discoverable as possible, please add the keyword `generategenerator` to package.json.

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 24 | [jonschlinkert](https://github.com/jonschlinkert) |
| 7 | [doowb](https://github.com/doowb) |
| 1 | [jamen](https://github.com/jamen) |
| 1 | [tunnckoCore](https://github.com/tunnckoCore) |

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

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
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.0, on December 09, 2016._