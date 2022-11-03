// node(postcss-value-parser)
import valueParser from 'https://deno.land/x/postcss_value_parser@4.2.0/mod.js';

const keywords = [
	'woff',
	'truetype',
	'opentype',
	'woff2',
	'embedded-opentype',
	'collection',
	'svg',
];

function postcssFontFormatKeywords({ preserve = false } = {}) {
	return {
		postcssPlugin: 'postcss-font-format-keywords',
		AtRule: {
			'font-face'(atRule) {
				if (atRule.name !== 'font-face') return; // case-sensitive

				atRule.walkDecls('src', (decl) => {
					if (!decl.value.includes('format(')) return; // skip useless parsing

					const val = valueParser(decl.value);

					val.walk((node) => {
						if (node.type !== 'function' || node.value !== 'format') return;

						node.nodes.forEach((child) => {
							if (child.type !== 'word' || !keywords.includes(child.value)) {
								return;
							}

							child.value = valueParser.stringify({
								type: 'string',
								value: child.value,
								quote: opts.singleQuote ? '\'' : '"',
							});
						});
					});

					if (preserve) {
						decl.cloneBefore({ value: val.toString() });
					} else {
						decl.value = val.toString();
					}
				});
			},
		},
	};
}

postcssFontFormatKeywords.postcss = true;

export default postcssFontFormatKeywords;
