'use strict';

exports.json = {
  sudo: false,
  language: 'node_js',
  node_js: ['node', '6' ]
};

exports.yaml = [
  'sudo: false',
  'language: node_js',
  'node_js:',
  '  - \'node\'',
  '  - \'6\''
].join('\n');
