module.exports = {
	// Enforce Return After Callback
	'node/callback-return': 'error',
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
	
	'node/no-unpublished-require': 'off',
	'node/exports-style': [
		'error',
		'module.exports'
	],
	'node/prefer-global/buffer': [
		'error',
		'always'
	],
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