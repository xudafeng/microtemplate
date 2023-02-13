# microtemplate

[![NPM version][npm-image]][npm-url]
[![CI][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/microtemplate.svg
[npm-url]: https://npmjs.org/package/microtemplate
[ci-image]: https://github.com/xudafeng/microtemplate/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/xudafeng/microtemplate/actions/workflows/ci.yml
[codecov-image]: https://img.shields.io/codecov/c/github/xudafeng/microtemplate.svg?logo=codecov
[codecov-url]: https://codecov.io/gh/xudafeng/microtemplate
[node-image]: https://img.shields.io/badge/node.js-%3E=_12-green.svg
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

|[<img src="https://avatars.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars.githubusercontent.com/u/52845048?v=4" width="100px;"/><br/><sub><b>snapre</b></sub>](https://github.com/snapre)<br/>|
| :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Fri Feb 03 2023 19:58:31 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## License

The MIT License (MIT)
