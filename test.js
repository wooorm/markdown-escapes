import assert from 'assert'
import test from 'tape'
import {markdownEscapes} from './index.js'

test('markdownEscapes', function (t) {
  t.ok(markdownEscapes.includes('!'), 'should include ascii punctuation')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < markdownEscapes.length) {
      assert.equal(
        typeof markdownEscapes[index],
        'string',
        markdownEscapes[index]
      )
    }
  }, 'should be all strings')

  t.end()
})
