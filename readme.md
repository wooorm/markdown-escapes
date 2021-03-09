# markdown-escapes

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of escapable characters in markdown.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install markdown-escapes
```

## Use

```js
import {markdownEscapes} from 'markdown-escapes'

console.log(markdownEscapes) //=> ['!', '"', '#', /* … */ '|', '}', '~']
```

## API

This package exports the following identifiers: `markdownEscapes`.
There is no default export.

### `markdownEscapes`

List of escapable characters (`string[]`) in CommonMark and GFM (they’re the
same).

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/markdown-escapes/workflows/main/badge.svg

[build]: https://github.com/wooorm/markdown-escapes/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/markdown-escapes.svg

[coverage]: https://codecov.io/github/wooorm/markdown-escapes

[downloads-badge]: https://img.shields.io/npm/dm/markdown-escapes.svg

[downloads]: https://www.npmjs.com/package/markdown-escapes

[size-badge]: https://img.shields.io/bundlephobia/minzip/markdown-escapes.svg

[size]: https://bundlephobia.com/result?p=markdown-escapes

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
