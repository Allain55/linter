const nodeJsRules = require('../rules/node');

module.exports = {
	'extends': [
		'./eslint_shared.config.js',
		'plugin:n/recommended'
	],
	'env': {
		'node': true
	},
	'rules': nodeJsRules
};