const nodeJsRules = require('../rules/node');

module.exports = {
	'extends': [
		'./eslint_shared.config.js',
		'plugin:node/recommended',
		"plugin:@typescript-eslint/recommended",
	],
	'env': {
		'node': true
	},
	'plugins': [
		'@typescript-eslint'
	],
	'root': true,
	'rules': {
		...nodeJsRules,
		'import/no-unresolved': 'off',
		'jsdoc/require-jsdoc': 'off',
		'node/no-missing-import': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/no-import-type-side-effects': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'error',
		'@typescript-eslint/no-redeclare': 'error',
	}
};