const bestPractises  = require('./rules/best_practises'),
	  possibleErrors = require('./rules/possible_errors'),
	  variables 	 = require('./rules/variables'),
	  strictRules 	 = require('./rules/strict_mode'),
	  stylistic 	 = require('./rules/stylistic'),
	  es6Rules 		 = require('./rules/ecmascript_6');

module.exports = {
	'extends': [
		'plugin:unicorn/recommended'
	],
	'plugins': [
		'jsdoc'
	],
	'settings': {
		'jsdoc': {
			'preferredTypes': {
				'object': 'Object'
			}
		}
	},
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 2020
	},
	'rules': {
		...possibleErrors,
		...bestPractises,
		...variables,
		...stylistic,
		...es6Rules,
		...strictRules,
		'unicorn/catch-error-name': [
			'error',
			{
				'name': 'err'
			}
		],
		'unicorn/filename-case': [
			'error',
			{
				'cases': {
					'camelCase': true,
					'pascalCase': true
				}
			}
		],
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/explicit-length-check': 'off',

		'jsdoc/check-alignment': 'error',
		'jsdoc/check-indentation': 'error',
		// 'jsdoc/check-syntax': 'error', //todo
		'jsdoc/check-tag-names': 'error',
		'jsdoc/check-types': 'error',
		'jsdoc/implements-on-classes': 'error',
		'jsdoc/require-param': 'error',
		'jsdoc/require-param-name': 'error',
		'jsdoc/require-returns': 'error',
		'jsdoc/require-returns-check': 'error',
		'jsdoc/require-returns-type': 'error',
		'jsdoc/valid-types': 'error'
	}
};