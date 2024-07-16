module.exports = {
	'no-process-exit': 'off', // todo deprecated rule and enabled but already provided by the node plugin
	// disallow the use of undeclared variables unless mentioned in `/*global */` comments
	'no-undef': 'error',
	// disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
	'prefer-object-has-own': 'error',
	'import/dynamic-import-chunkname': 'off',
	'jsdoc/require-jsdoc': [
		'error',
		{
			'enableFixer': false,
			'exemptEmptyFunctions': true,
			'require': {
				'ClassDeclaration': false,
				'ClassExpression': true,
				'ArrowFunctionExpression': true,
				'FunctionExpression': true,
				'MethodDefinition': true
			}
		}
	],
	// require error handling in callbacks
	'n/handle-callback-err': 'error',
	// disallow new operators with calls to require
	'n/no-new-require': 'error',
	// disallow string concatenation with __dirname and __filename
	'n/no-path-concat': 'error',
	// disallow synchronous methods
	'n/no-sync': 'error',
	// enforce module.exports
	'n/exports-style': [
		'error',
		'module.exports'
	],
	// enforce Buffer usage
	'n/prefer-global/buffer': [
		'error',
		'always'
	],
	'unicorn/numeric-separators-style': 'error',
	'unicorn/no-process-exit': 'off', // rule already provided by the node plugin
	'unicorn/prefer-module': 'off'
};