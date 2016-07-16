/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module markdown-escapes
 * @fileoverview Test suite for `markdown-escapes`.
 */

'use strict';

/* eslint-env node */

/* Dependencies. */
var test = require('tape');
var escapes = require('./');

/* Tests. */
test('escapes()', function (t) {
  t.ok(escapes.default.every(function (escape) {
    return escapes.gfm.indexOf(escape) !== -1;
  }), 'all default escapes should be in gfm');

  t.ok(escapes.gfm.every(function (escape) {
    return escapes.commonmark.indexOf(escape) !== -1;
  }), 'all gfm escapes should be in commonmark');

  t.equal(
    escapes({commonmark: true}),
    escapes.commonmark,
    'should return commonmark escapes if `commonmark: true`'
  );

  t.equal(
    escapes({gfm: true}),
    escapes.gfm,
    'should return gfm escapes if `gfm: true`'
  );

  t.equal(
    escapes(),
    escapes.default,
    'should return default escapes otherwise'
  );

  t.end();
});
