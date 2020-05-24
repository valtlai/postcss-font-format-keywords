'use strict';

const { name } = require('./package.json');
const postcss = require('postcss');
const valueParser = require('postcss-value-parser');

const re = {
	rule: /^font-face$/i,
	prop: /^src$/i,
	func: /^format$/i,
	keyw: /^(?:woff2?|truetype|(?:embedded-)?opentype|svg)$/i
};

module.exports = postcss.plugin(name, (opts = {}) => (
	(root) => {
		root.walkAtRules(re.rule, (rule) => {
			rule.walkDecls(re.prop, (decl) => {
				const val = valueParser(decl.value);

				val.walk((node) => {
					if (node.type !== 'function' || !re.func.test(node.value)) return;

					node.nodes.forEach((child) => {
						if (child.type !== 'word' || !re.keyw.test(child.value)) return;

						child.value = valueParser.stringify({
							type: 'string',
							value: child.value,
							quote: opts.singleQuote ? "'" : '"'
						});
					});
				});

				decl.value = val.toString();
			});
		});
	}
));
