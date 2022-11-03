# PostCSS Font Format Keywords [<img src="https://api.postcss.org/logo.svg" alt="PostCSS" width="90" height="90" align="right">](https://github.com/postcss/postcss)

[![deno.land](https://deno.land/badge/postcss_font_format_keywords/version)](https://deno.land/x/postcss_font_format_keywords)
[![NPM](https://img.shields.io/npm/v/postcss-font-format-keywords.svg)](https://www.npmjs.com/package/postcss-color-image)
[![License](https://img.shields.io/npm/l/postcss-font-format-keywords.svg)](LICENSE)

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

## Usage

### Deno

Import the module:

```js
import postcss from 'npm:postcss';
import formatKeywords from 'https://deno.land/x/postcss_font_format_keywords@3.0.1/mod.js';

await postcss([formatKeywords]).process(YOUR_CSS);
```

### Node.js

Add the package in your project:

```sh
npm install postcss-font-format-keywords
```

Then import or require it:

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
