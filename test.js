import test from 'tape'
import {defaults, gfm, commonmark, escapes} from './index.js'

test('escapes()', function (t) {
  t.ok(
    defaults.every(function (escape) {
      return gfm.includes(escape)
    }),
    'all default escapes should be in gfm'
  )

  t.ok(
    gfm.every(function (escape) {
      return commonmark.includes(escape)
    }),
    'all gfm escapes should be in commonmark'
  )

  t.equal(
    escapes({commonmark: true}),
    commonmark,
    'should return commonmark escapes if `commonmark: true`'
  )

  t.equal(escapes({gfm: true}), gfm, 'should return gfm escapes if `gfm: true`')

  t.equal(escapes(), defaults, 'should return default escapes otherwise')

  t.end()
})
