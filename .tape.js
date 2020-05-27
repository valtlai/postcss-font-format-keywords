'use strict';

module.exports = {
	basic: {
		message: 'supports basic usage'
	},
	single: {
		message: 'supports single quotes',
		options: { singleQuote: true }
	},
	ignored: {
		message: 'ignores other usage',
		expect: 'ignored.css'
	}
};
