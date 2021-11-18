# microtemplate

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/microtemplate.svg
[npm-url]: https://npmjs.org/package/microtemplate
[travis-image]: https://img.shields.io/travis/xudafeng/microtemplate.svg
[travis-url]: https://travis-ci.org/xudafeng/microtemplate
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/microtemplate.svg
[coveralls-url]: https://coveralls.io/r/xudafeng/microtemplate?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/microtemplate.svg
[download-url]: https://npmjs.org/package/microtemplate

> micro template engine

## Installment

```bash
$ npm i microtemplate -g
```

## Options

```javascript
const Render = require('microtemplate').render;
const output = Render('<#key#>', {
  key: 'value'
}, {
  tagOpen: '<#',
  tagClose: '#>'
});
```

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|
| :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Thu Nov 18 2021 21:37:46 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## License

The MIT License (MIT)
