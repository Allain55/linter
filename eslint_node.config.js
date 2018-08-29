const nodeJsRules = require('./rules/node');

module.exports = {
	'extends': [
		'./eslint_shared.config.js',
		'plugin:node/recommended',
		'plugin:security/recommended'
	],
	'plugins': [
		'security'
	],
	'env': {
		'node': true
	},
	'globals': {
		'sails': true
	},
	'rules': Object.assign(
		{},
		nodeJsRules,
		{
			'node/exports-style': [
				'error',
				'module.exports'
			],
			'node/prefer-global/buffer': [
				'error',
				'always'
			]
		}
	)
};