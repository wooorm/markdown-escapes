'use strict';

/* Expose. */
module.exports = escapes;

/* Characters. */
var defaults = [
  '\\',
  '`',
  '*',
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '#',
  '+',
  '-',
  '.',
  '!',
  '_',
  '>'
];

var gfm = defaults.concat(['~', '|']);

var commonmark = gfm.concat([
  '\n',
  '"',
  '$',
  '%',
  '&',
  '\'',
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '?',
  '@',
  '^'
]);

/* Expose characters. */
escapes.default = defaults;
escapes.gfm = gfm;
escapes.commonmark = commonmark;

/* Get markdown escapes. */
function escapes(options) {
  var settings = options || {};

  if (settings.commonmark) {
    return commonmark;
  }

  return settings.gfm ? gfm : defaults;
}
