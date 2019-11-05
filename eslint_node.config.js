const nodeJsRules = require('./rules/node');

module.exports = {
	'extends': [
		'./eslint_shared.config.js',
		'plugin:node/recommended'
	],
	'plugins': [
		'jsdoc'
	],
	'env': {
		'node': true
	},
	'globals': {
		'sails': true
	},
	'settings': {
		'jsdoc': {
			'preferredTypes': {
				'object': 'Object'
			}
		}
	},
	'rules': {
		...nodeJsRules,
		...{
			'node/no-unpublished-require': 'off',
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