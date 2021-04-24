'use strict';

const test = require('ava');
const postcss = require('postcss');
const plugin = require('.');

async function run(t, input, output, opts = {}) {
	const result = await postcss([plugin(opts)]).process(input, { from: null });
	t.is(result.css, output);
	t.is(result.warnings().length, 0);
}

// Valid keywords

test('converts valid keyword', run,
	'@font-face { src: format(woff) }',
	'@font-face { src: format("woff") }'
);

test('converts valid keyword using single quotes', run,
	'@font-face { src: format(woff) }',
	"@font-face { src: format('woff') }",
	{ singleQuote: true }
);

test('converts multiple valid keywords', run,
	'@font-face { src: url(a) format(woff), url(b) format(svg) }',
	'@font-face { src: url(a) format("woff"), url(b) format("svg") }'
);

test('converts all valid keywords', run,
	`@font-face { src: format(woff), format(truetype), format(opentype),
		format(woff2), format(embedded-opentype), format(collection),
		format(svg) }`,
	`@font-face { src: format("woff"), format("truetype"), format("opentype"),
		format("woff2"), format("embedded-opentype"), format("collection"),
		format("svg") }`
);

// Non-lowercase identifiers

test('ignores non-lowercase at-rule name', run,
	'@Font-face { src: format(woff) }',
	'@Font-face { src: format(woff) }'
);

test('ignores non-lowercase property name', run,
	'@font-face { Src: format(woff) }',
	'@font-face { Src: format(woff) }'
);

test('ignores non-lowercase function name', run,
	'@font-face { src: Format(woff) }',
	'@font-face { src: Format(woff) }'
);

test('ignores non-lowercase format keyword', run,
	'@font-face { src: format(Woff) }',
	'@font-face { src: format(Woff) }'
);

// Incorrect identifiers

test('ignores unrelated at-rule', run,
	'@no-font-face { src: format(woff) }',
	'@no-font-face { src: format(woff) }'
);

test('ignores unrelated property', run,
	'@font-face { no-src: format(woff) }',
	'@font-face { no-src: format(woff) }'
);

test('ignores unrelated function', run,
	'@font-face { src: no-format(woff) }',
	'@font-face { src: no-format(woff) }'
);

test('ignores unknown format keyword', run,
	'@font-face { src: format(baz) }',
	'@font-face { src: format(baz) }'
);
