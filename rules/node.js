module.exports = {
	// disallow initializing variables to `undefined`
	'no-undef': 'error',
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
	'unicorn/no-process-exit': 'off', // rule already provided by the node plugin
	'unicorn/prefer-optional-catch-binding': 'error',
	'unicorn/prefer-replace-all': 'error',
	'node/no-unpublished-require': 'off',
	'jsdoc/require-jsdoc': [
		'error',
		{
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