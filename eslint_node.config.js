const nodeJsRules = require('./rules/node');

module.exports = {
	'extends': [
		'./eslint_shared.config.js',
		'plugin:node/recommended'
	],
	'env': {
		'node': true
	},
	'globals': {
		'sails': true
	},
	'rules': {
		...nodeJsRules,
		...{
			'node/exports-style': [
				'error',
				'module.exports'
			],
			'node/prefer-global/buffer': [
				'error',
				'always'
			]
		}
	}
};