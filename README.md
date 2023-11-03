# PostCSS Font Format Keywords [<img src="https://api.postcss.org/logo.svg" alt="PostCSS" width="90" height="90" align="right">](https://github.com/postcss/postcss)

[![NPM](https://img.shields.io/npm/v/postcss-font-format-keywords.svg)](https://www.npmjs.com/package/postcss-font-format-keywords)

This PostCSS plugin lets you specify font formats as keywords, following the
[CSS Fonts](https://drafts.csswg.org/css-fonts-4/#font-format-values)
specification.

```css
@font-face {
	src: url(file.woff2) format(woff2);
}

/* becomes */

@font-face {
	src: url(file.woff2) format("woff2");
}
```

> [!IMPORTANT]
> ## ❌ Deprecated
>
> This module is deprecated and will not receive any updates anymore.
> Please use
> [@csstools/postcss-font-format-keywords](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-format-keywords#readme)
> instead.
>
> ```
> npm install @csstools/postcss-font-format-keywords
> ```

## Install

```
npm install postcss-font-format-keywords
```

## Usage

```js
import postcss from 'postcss';
import formatKeywords from 'postcss-font-format-keywords';
// OR
const postcss = require('postcss');
const formatKeywords = require('postcss-font-format-keywords');

await postcss([formatKeywords]).process(YOUR_CSS);
```

## Options

### `preserve: true`

Keep the original CSS declaration alongside the transformed one.

```css
@font-face {
	src: url(file.woff2) format("woff2");
	src: url(file.woff2) format(woff2);
}
```
