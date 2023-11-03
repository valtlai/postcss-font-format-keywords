# PostCSS Font Format Keywords [<img src="https://api.postcss.org/logo.svg" alt="PostCSS" width="90" height="90" align="right">](https://github.com/postcss/postcss)

[![deno.land](https://deno.land/badge/postcss_font_format_keywords/version)](https://deno.land/x/postcss_font_format_keywords)
[![License](https://img.shields.io/npm/l/postcss-font-format-keywords.svg)](https://deno.land/x/postcss_font_format_keywords@4.0.2/LICENSE.md?source)

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

## ❌ Deprecated

This module is deprecated and will not receive any updates anymore.
Please use the following instead:

```js
import formatKeywords from "npm:@csstools/postcss-font-format-keywords@VERSION";
```

## Usage

```js
import postcss from "npm:postcss";
import formatKeywords from "https://deno.land/x/postcss_font_format_keywords@4.0.2/mod.js";

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
