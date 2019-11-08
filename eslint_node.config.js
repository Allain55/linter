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
			'node/no-unpublished-require': 'off',
			'node/exports-style': [
				'error',
				'module.exports'
			],
			'node/prefer-global/buffer': [
				'error',
				'always'
			],
			// todo enable this
			// 'jsdoc/require-jsdoc': [
			// 	'error',
			// 	{
			// 		'require': {
			// 			'ArrowFunctionExpression': true,
			// 			'ClassExpression': true,
			// 			'FunctionExpression': true,
			// 			'MethodDefinition': true
			// 		}
			// 	}
			// ]
		}
	}
};