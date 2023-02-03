# microtemplate2

[![NPM version][npm-image]][npm-url]
[![CI][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/microtemplate2.svg
[npm-url]: https://npmjs.org/package/microtemplate2
[ci-image]: https://github.com/xudafeng/microtemplate2/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/xudafeng/microtemplate2/actions/workflows/ci.yml
[codecov-image]: https://img.shields.io/codecov/c/github/xudafeng/microtemplate2.svg?logo=codecov
[codecov-url]: https://codecov.io/gh/xudafeng/microtemplate2
[node-image]: https://img.shields.io/badge/node.js-%3E=_12-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/microtemplate2.svg
[download-url]: https://npmjs.org/package/microtemplate2

> micro template engine

## Installment

```bash
$ npm i microtemplate2 -g
```

## Options

```javascript
const Render = require('microtemplate2').render;
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
