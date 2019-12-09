# PostCSS Font Format Keywords [<img src="https://api.postcss.org/logo.svg" alt="PostCSS" width="90" height="90" align="right">](https://github.com/postcss/postcss)

[![NPM](https://img.shields.io/npm/v/postcss-font-format-keywords.svg)](https://www.npmjs.com/package/postcss-font-format-keywords)
[![License](https://img.shields.io/npm/l/postcss-font-format-keywords.svg)](https://github.com/valtlai/postcss-font-format-keywords/blob/master/LICENSE)

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

Add the package in your project:

```sh
npm install postcss-font-format-keywords --save-dev
```

Use it as a PostCSS plugin
(see the [instructions](https://github.com/postcss/postcss#usage))
or directly:

```js
const formatKeywords = require('postcss-font-format-keywords');

formatKeywords.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

## Options

### singleQuote

Set the `singleQuote` option to `true` to output single quotes.
Otherwise, double quotes are used.

```css
/* The output when { singleQuote: true } */

@font-face {
  src: url(file.woff2) format('woff2');
}
```
