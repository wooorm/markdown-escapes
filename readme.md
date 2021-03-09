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
import {escapes, commonmark} from 'markdown-escapes'

// Access by property:
console.log(commonmark) //=> ['\\', '`', ..., '@', '^']

// Access by options object:
console.log(escapes({gfm: true})) //=> ['\\', '`', ..., '~', '|']
```

## API

This package exports the following identifiers: `escapes`, `commonmark`, `gfm`,
and `defaults`.
There is no default export.

### `escapes(options?)`

Get escapes.
Supports `options.commonmark` and `options.gfm`, which when `true` returns the
extra escape characters supported by those flavors.

###### Returns

`string[]`.

### `defaults`

List of default escapable characters.

### `gfm`

List of escapable characters in GFM (which includes all `default`s).

### `commonmark`

List of escapable characters in CommonMark (which includes all `gfm`s).

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
