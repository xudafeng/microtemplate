# microtemplate

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/microtemplate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/microtemplate
[travis-image]: https://img.shields.io/travis/xudafeng/microtemplate.svg?style=flat-square
[travis-url]: https://travis-ci.org/xudafeng/microtemplate
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/microtemplate.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/xudafeng/microtemplate?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_7-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/microtemplate.svg?style=flat-square
[download-url]: https://npmjs.org/package/microtemplate

> micro template engine

## Installment

``` bash
$ npm i microtemplate -g
```

## Options

``` javascript
var Render = require('microtemplate').render;
var output = Render('<#key#>', {
    key: 'value'
  }, {
    tagOpen: '<#',
    tagClose: '#>'
});
```

## License

The MIT License (MIT)

Copyright (c) 2013 xdf
