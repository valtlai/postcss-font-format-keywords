'use strict';

const fs = require('fs').promises;
const json = require('./package.json');

['scripts', 'devDependencies', 'eslintConfig']
	.forEach(key => delete json[key]);

fs.writeFile('package.json', `${JSON.stringify(json, null, '\t')}\n`);
