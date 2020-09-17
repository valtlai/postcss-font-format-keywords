/* globals expect, it */
'use strict';

const postcss = require('postcss');
const plugin = require('.');

async function run (input, output, opts = {}) {
	const result = await postcss([plugin(opts)]).process(input, { from: null });
	expect(result.css).toEqual(output);
	expect(result.warnings()).toHaveLength(0);
}

// Valid keywords

it('converts valid keyword', () => run(
	'@font-face { src: format(woff) }',
	'@font-face { src: format("woff") }'
));

it('converts valid keyword using single quotes', () => run(
	'@font-face { src: format(woff) }',
	"@font-face { src: format('woff') }",
	{ singleQuote: true }
));

it('converts multiple valid keywords', () => run(
	'@font-face { src: url(a) format(woff), url(b) format(svg) }',
	'@font-face { src: url(a) format("woff"), url(b) format("svg") }'
));

it('converts all valid keywords', () => run(
	`@font-face { src: format(woff), format(truetype), format(opentype),
		format(woff2), format(embedded-opentype), format(collection),
		format(svg) }`,
	`@font-face { src: format("woff"), format("truetype"), format("opentype"),
		format("woff2"), format("embedded-opentype"), format("collection"),
		format("svg") }`
));

// Non-lowercase identifiers

it('ignores non-lowercase at-rule name', () => run(
	'@Font-face { src: format(woff) }',
	'@Font-face { src: format(woff) }'
));

it('ignores non-lowercase property name', () => run(
	'@font-face { Src: format(woff) }',
	'@font-face { Src: format(woff) }'
));

it('ignores non-lowercase function name', () => run(
	'@font-face { src: Format(woff) }',
	'@font-face { src: Format(woff) }'
));

it('ignores non-lowercase format keyword', () => run(
	'@font-face { src: format(Woff) }',
	'@font-face { src: format(Woff) }'
));

// Incorrect identifiers

it('ignores unrelated at-rule', () => run(
	'@no-font-face { src: format(woff) }',
	'@no-font-face { src: format(woff) }'
));

it('ignores unrelated property', () => run(
	'@font-face { no-src: format(woff) }',
	'@font-face { no-src: format(woff) }'
));

it('ignores unrelated function', () => run(
	'@font-face { src: no-format(woff) }',
	'@font-face { src: no-format(woff) }'
));

it('ignores unknown format keyword', () => run(
	'@font-face { src: format(baz) }',
	'@font-face { src: format(baz) }'
));
