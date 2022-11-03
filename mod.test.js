import { assertEquals } from 'https://deno.land/std@0.161.0/testing/asserts.ts';
import postcss from 'npm:postcss@8.4.18';
import plugin from './mod.js';

function test(name, input, expected, opts = {}) {
	Deno.test(name, async () => {
		const result = await postcss([plugin(opts)]).process(input, { from: null });
		assertEquals(result.css, expected);
		assertEquals(result.warnings().length, 0);
	});
}

// Valid keywords

test(
	'Converts valid keyword',
	'@font-face { src: format(woff) }',
	'@font-face { src: format("woff") }',
);

test(
	'Converts valid keyword using single quotes',
	'@font-face { src: format(woff) }',
	'@font-face { src: format(\'woff\') }',
	{ singleQuote: true },
);

test(
	'Converts multiple valid keywords',
	'@font-face { src: url(a) format(woff), url(b) format(svg) }',
	'@font-face { src: url(a) format("woff"), url(b) format("svg") }',
);

test(
	'Converts all valid keywords',
	`@font-face { src: format(woff), format(truetype), format(opentype),
		format(woff2), format(embedded-opentype), format(collection),
		format(svg) }`,
	`@font-face { src: format("woff"), format("truetype"), format("opentype"),
		format("woff2"), format("embedded-opentype"), format("collection"),
		format("svg") }`,
);

// Non-lowercase identifiers

test(
	'Ignores non-lowercase at-rule name',
	'@Font-face { src: format(woff) }',
	'@Font-face { src: format(woff) }',
);

test(
	'Ignores non-lowercase property name',
	'@font-face { Src: format(woff) }',
	'@font-face { Src: format(woff) }',
);

test(
	'Ignores non-lowercase function name',
	'@font-face { src: Format(woff) }',
	'@font-face { src: Format(woff) }',
);

test(
	'Ignores non-lowercase format keyword',
	'@font-face { src: format(Woff) }',
	'@font-face { src: format(Woff) }',
);

// Incorrect identifiers

test(
	'Ignores unrelated at-rule',
	'@no-font-face { src: format(woff) }',
	'@no-font-face { src: format(woff) }',
);

test(
	'Ignores unrelated property',
	'@font-face { no-src: format(woff) }',
	'@font-face { no-src: format(woff) }',
);

test(
	'Ignores unrelated function',
	'@font-face { src: no-format(woff) }',
	'@font-face { src: no-format(woff) }',
);

test(
	'Ignores unknown format keyword',
	'@font-face { src: format(baz) }',
	'@font-face { src: format(baz) }',
);
