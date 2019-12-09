const { name } = require('./package.json');
const postcss = require('postcss');
const valueParser = require('postcss-value-parser');

const keywords = [
	'woff',
	'truetype',
	'opentype',
	'woff2',
	'embedded-opentype',
	'svg'
];

module.exports = postcss.plugin(name, (opts = {}) => (
	(root) => {
		root.walkAtRules(/^font-face$/i, (rule) => {
			rule.walkDecls(/^src$/i, (decl) => {
				const val = valueParser(decl.value);

				val.walk((node) => {
					if (node.type !== 'function'
						|| !/^format$/i.test(node.value)) return;

					node.nodes.forEach((child) => {
						if (child.type !== 'word'
							|| !keywords.includes(child.value.toLowerCase())) return;

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
