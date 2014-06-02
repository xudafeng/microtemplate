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

"use strict";

//default config
var defaultOptions = {
  tagOpen:'<#',
  tagClose:'#>'
};

/**
 * @param {String} template
 * @param {Object} data
 * @param {Object} options
 */
function Render(template, data, options){
  var tagOpen = options.tagOpen || defaultOptions.tagOpen;
  var tagClose = options.tagClose || defaultOptions.tagClose;

  var content = '';
  template.split(tagOpen).forEach(function(i){
    i = i.split(tagClose);
    var $0 = i[0],$1 = i[1];
    if (i.length == 1) {
      content += $0;
    } else {
      content += data[$0] || '';
      if ($1) {
        content += $1;
      }
    }
  });
  return content;
}

exports.render = Render;
