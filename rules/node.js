module.exports = {
	'no-process-exit': 'off', // todo deprecated rule and enabled but already provided by the node plugin
	// disallow the use of undeclared variables unless mentioned in `/*global */` comments
	'no-undef': 'error',
	// disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
	'prefer-object-has-own': 'error',
	// disallow deprecated APIs
	'node/no-deprecated-api': 'error',
	// require require() calls to be placed at top-level module scope
	'node/global-require': 'error',
	// require error handling in callbacks
	'node/handle-callback-err': 'error',
	// disallow new operators with calls to require
	'node/no-new-require': 'error',
	// disallow string concatenation with __dirname and __filename
	'node/no-path-concat': 'error',
	// disallow the use of process.exit()
	'node/no-process-exit': 'error',
	// disallow synchronous methods
	'node/no-sync': 'error',
	
	'node/exports-style': [
		'error',
		'module.exports'
	],
	'node/prefer-global/buffer': [
		'error',
		'always'
	],
	'unicorn/numeric-separators-style': 'error',
	'unicorn/no-process-exit': 'off', // rule already provided by the node plugin
	'unicorn/prefer-string-replace-all': 'error',
	'unicorn/prefer-module': 'off',
	'node/no-unpublished-require': 'off',
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
	]
};