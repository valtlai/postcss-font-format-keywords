import assert from 'node:assert';
import test from 'node:test';
import postcss from 'postcss';
import plugin from './index.js';

function runTest(name, input, expected, options = {}) {
	test(name, async () => {
		const result = await postcss([plugin(options)]).process(input, {
			from: undefined,
		});
		assert.equal(result.css, expected);
		assert.equal(result.warnings().length, 0);
	});
}

// Valid keywords

runTest(
	'converts valid keyword',
	'@font-face { src: format(woff) }',
	'@font-face { src: format("woff") }',
);

runTest(
	'converts multiple valid keywords',
	'@font-face { src: url(a) format(woff), url(b) format(svg) }',
	'@font-face { src: url(a) format("woff"), url(b) format("svg") }',
);

runTest(
	'converts all valid keywords',
	`@font-face { src: format(woff), format(truetype), format(opentype),
		format(woff2), format(embedded-opentype), format(collection),
		format(svg) }`,
	`@font-face { src: format("woff"), format("truetype"), format("opentype"),
		format("woff2"), format("embedded-opentype"), format("collection"),
		format("svg") }`,
);

// Non-lowercase identifiers

runTest(
	'ignores non-lowercase at-rule name',
	'@Font-face { src: format(woff) }',
	'@Font-face { src: format(woff) }',
);

runTest(
	'ignores non-lowercase property name',
	'@font-face { Src: format(woff) }',
	'@font-face { Src: format(woff) }',
);

runTest(
	'ignores non-lowercase function name',
	'@font-face { src: Format(woff) }',
	'@font-face { src: Format(woff) }',
);

runTest(
	'ignores non-lowercase format keyword',
	'@font-face { src: format(Woff) }',
	'@font-face { src: format(Woff) }',
);

// Incorrect identifiers

runTest(
	'ignores unrelated at-rule',
	'@no-font-face { src: format(woff) }',
	'@no-font-face { src: format(woff) }',
);

runTest(
	'ignores unrelated property',
	'@font-face { no-src: format(woff) }',
	'@font-face { no-src: format(woff) }',
);

runTest(
	'ignores unrelated function',
	'@font-face { src: no-format(woff) }',
	'@font-face { src: no-format(woff) }',
);

runTest(
	'ignores unknown format keyword',
	'@font-face { src: format(baz) }',
	'@font-face { src: format(baz) }',
);

// Options

runTest(
	'keeps original declaration when { preserve: true }',
	'@font-face { src: format(woff) }',
	'@font-face { src: format("woff"); src: format(woff) }',
	{ preserve: true },
);
