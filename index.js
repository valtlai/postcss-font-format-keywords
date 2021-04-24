'use strict';

const { name: postcssPlugin } = require('./package.json');
const valueParser = require('postcss-value-parser');

const keywords = [
	'woff',
	'truetype',
	'opentype',
	'woff2',
	'embedded-opentype',
	'collection',
	'svg'
];

module.exports = (opts = {}) => {
	return {
		postcssPlugin,
		AtRule: {
			'font-face'(atRule) {
				if (atRule.name !== 'font-face') return; // case-sensitive

				atRule.walkDecls('src', (decl) => {
					if (!decl.value.includes('format(')) return; // skip useless parsing

					const val = valueParser(decl.value);

					val.walk((node) => {
						if (node.type !== 'function' || node.value !== 'format') return;

						node.nodes.forEach((child) => {
							if (child.type !== 'word' || !keywords.includes(child.value)) return;

							child.value = valueParser.stringify({
								type: 'string',
								value: child.value,
								quote: opts.singleQuote ? "'" : '"'
							});
						});
					});

					decl.value = val.toString();
				});
			}
		}
	};
};

module.exports.postcss = true;
