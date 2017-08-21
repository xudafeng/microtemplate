'use strict';

var fs = require('fs');
var path = require('path');

var parse = require('../index').parse;
var render = require('../index').render;
var compile = require('../index').compile;

describe('microtemplate.js', function () {
  var template = '<#if (a) {#><#=a#>bc<#}#><#=d#>';
  describe('parse test', function () {
    it('should be ok', function () {
      var res = parse(template);
      res.should.have.length(5);
    });
  });
  describe('compile test', function () {
    it('should be ok', function () {
      var res = compile(template);
      //res.should.be.a.Function;
    });
  });
  describe('render test', function () {
    it('should be ok', function () {
      var res = render(template, {
        a: 'aa',
        d: 'dd'
      });
      res.should.equal('aabcdd');
    });
  });
  describe('file io test', function () {
    it('should be ok', function () {
      var template = path.join(__dirname, 'benchmark/package.json');
      template = fs.readFileSync(template, 'utf-8');
      var res = render(template, {
        name: 'microtemplate'
      });
      res.should.be.a.String();
    });
  });
});
