'use strict';

const fs = require('fs');
const packageJson = require('./package.json');

const delKeys = [
	'scripts',
	'devDependencies',
	'eslintConfig'
];

delKeys.forEach(key => delete packageJson[key]);

const jsonData = JSON.stringify(packageJson, null, '\t') + '\n';
fs.writeFileSync('package.json', jsonData); // eslint-disable-line node/no-sync
