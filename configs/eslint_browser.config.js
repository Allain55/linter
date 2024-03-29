module.exports = {
	'extends': [
		'./eslint_shared.config.js'
	],
	'env': {
		'browser': true
	},
	'globals': {
		'dataLayer': true
	},
	'rules': {
		'prefer-named-capture-group': 'off', // bad support and no transpile available
		'require-unicode-regexp': 'off', // bad support, not worth transpiling
		'import/dynamic-import-chunkname': 'off',
		'import/extensions': [ // only needed because of Webpack 5 and the idlize package
			'error',
			'never',
			{
				'ignorePackages': true,
				'pattern': {
					'mjs': 'always'
				}
			}
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				'devDependencies': true
			}
		],
		// No Node.js builtin modules
		'import/no-nodejs-modules': 'error',
		// Ensure imports point to a file/module that can be resolved
		'import/no-unresolved': [
			'error',
			{
				'ignore': [
					'^@' // ignore if the module name starts with @
				]
			}
		],
		'import/prefer-default-export': 'off',
		'unicorn/prefer-set-has': 'off'
	}
};