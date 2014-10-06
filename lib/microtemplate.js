/* ================================================================
 * microtemplate by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 19:23:07 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

//default config
var OPT = {
  tagOpen: '<#',
  tagClose: '#>'
};

var TAGS = {
  WRAP: '\n'
};

var _unescape = function(code) {
  return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, ' ');
}

var _merge = function(r, s) {
  for (var i in s) {
    r[i] = s[i];
  };
  return r;
}

var _filter = function(c) {
  return c
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\"/g, '\\"')
    .replace(/\'/g, "\\'");
}

var _render = function(template, data) {
  var content = '';
  try {
    content = template(data);
  } catch(e) {
    throw new Error(e);
  }
  return content;
}

var _parse = function(template) {
  var content = [];
  template.split(OPT.tagOpen).forEach(function(i) {
    i = i.split(OPT.tagClose);
    var $0 = i[0];
    var $1 = i[1];
    var l = null, s = null;

    if (i.length === 1) {
      s = $0;
    } else {
      l = $0;
      if ($1) s = $1;
    }
    content.push({
      'logic': l,
      'static': s
    });
  });
  return content;
}

var _compile = function(template) {
  var content = 'var $out = "";';
  template.forEach(function(i) {
    var l = i.logic;
    var s = i.static;
    if (l) content += (l[0] === '=' ? '$out += ' + _unescape(l.split('=')[1]) : l) + ';';
    if (s) content += '$out += "' + _filter(s) + '";';
  });
  content += 'return $out;';
  return new Function('$data', 'with($data) {' + content + '}');
}

/**
 * @param {String} template
 * @param {Object} options
 */
function Parse(template, options) {
  if (options) _merge(OPT, options);
  return _parse.call(this, template);
}

/**
 * @param  {String}  template
 * @param  {Object}  options
 * @return {Function}
 */
function Compile(template, options) {
  if (options) _merge(OPT, options);
  template = _parse.call(this, template);
  return _compile.call(this, template);
}

/**
 * @param {String} template
 * @param {Object} data
 * @param {Object} options
 */
function Render(template, data, options) {
  if (options) _merge(OPT, options);
  template = _parse.call(this, template);
  template = _compile.call(this, template);
  return _render.call(this, template, data);
}

exports.parse = Parse;
exports.compile = Compile;
exports.render = Render;
