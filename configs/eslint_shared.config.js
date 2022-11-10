const bestPractises  = require('../rules/best_practises'),
	  possibleErrors = require('../rules/possible_errors'),
	  variables 	 = require('../rules/variables'),
	  strictRules 	 = require('../rules/strict_mode'),
	  stylistic 	 = require('../rules/stylistic'),
	  es6Rules 		 = require('../rules/ecmascript_6');

module.exports = {
	'extends': [
		'plugin:unicorn/recommended',
		'plugin:import/recommended'
	],
	'plugins': [
		'jsdoc'
	],
	'settings': {
		'jsdoc': {
			'mode': 'typescript',
			'preferredTypes': {
				'object': 'Object'
			}
		}
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		...possibleErrors,
		...bestPractises,
		...variables,
		...stylistic,
		...es6Rules,
		...strictRules,
		
		// Enforce a newline after import statements
		'import/newline-after-import': 'error',
		// Report repeated import of the same module in multiple places
		'import/no-duplicates': 'error',
		// Enforce a leading comment with the webpackChunkName for dynamic imports
		'import/dynamic-import-chunkname': 'error',
		// Ensure all exports appear after other statements
		'import/exports-last': 'error',
		// Ensure consistent use of file extension within the import path
		'import/extensions': ['error', 'never'],
		// Ensure all imports appear before other statements
		'import/first': 'error',
		// Prefer named exports to be grouped together in a single export declaration
		'import/group-exports': 'error',
		// Limit the maximum number of dependencies a module can have
		'import/max-dependencies': [
			'warn',
			{
				'max': 10
			}
		],
		// Forbid a module from importing a module with a dependency path back to itself
		'import/no-cycle': 'error',
		// Forbid named default exports
		'import/no-named-default': 'error',
		// Prevent unnecessary path segments in import and require statements
		'import/no-useless-path-segments': 'error',
		// Enforce a convention in module import order
		'import/order': 'error',
		
		'unicorn/better-regex': 'error',
		'unicorn/catch-error-name': [
			'error',
			{
				'name': 'err'
			}
		],
		//todo: this rule needs improvements, check it later
		'unicorn/consistent-destructuring': 'off',
		'unicorn/explicit-length-check': 'off',
		'unicorn/filename-case': [
			'error',
			{
				'cases': {
					'camelCase': true,
					'pascalCase': true
				}
			}
		],
		'unicorn/no-array-callback-reference': 'off',
		'unicorn/no-array-for-each': 'off',
		'unicorn/no-array-reduce': 'off',
		'unicorn/no-fn-reference-in-iterator': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-reduce': 'off',
		'unicorn/no-unreadable-array-destructuring': 'error',
		'unicorn/no-useless-undefined': 'off',
		'unicorn/prefer-event-target': 'off',
		'unicorn/prefer-number-properties': 'off',
		'unicorn/prefer-query-selector': 'off',
		'unicorn/prefer-switch': 'off',
		'unicorn/prefer-ternary': 'off',
		'unicorn/prefer-trim-start-end': 'error',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/no-this-assignment': 'off',

		'jsdoc/check-alignment': 'error',
		// todo this can be enabled after this is fixed: https://github.com/eslint/eslint/issues/14745
		// 'jsdoc/check-examples': 'error',
		'jsdoc/check-indentation': 'error',
		'jsdoc/check-param-names': 'error',
		'jsdoc/check-property-names': 'error',
		'jsdoc/check-syntax': 'error',
		'jsdoc/check-tag-names': 'error',
		'jsdoc/check-types': 'error',
		'jsdoc/empty-tags': 'error',
		'jsdoc/implements-on-classes': 'error',
		// todo: types need to be imported for every file in order to enable this
		// 'jsdoc/no-undefined-types': 'error',
		'jsdoc/require-param': 'error',
		'jsdoc/require-param-name': 'error',
		'jsdoc/require-property': 'error',
		'jsdoc/require-returns': 'error',
		'jsdoc/require-returns-check': 'error',
		'jsdoc/require-returns-type': 'error',
		'jsdoc/valid-types': 'error'
	}
};