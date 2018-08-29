module.exports = {
	// Enforce Return After Callback
	'callback-return': 'error',
	// require require() calls to be placed at top-level module scope
	'global-require': 'warn',
	// require error handling in callbacks
	'handle-callback-err': 'error',
	// disallow use of the Buffer() constructor
	'no-buffer-constructor': 'error',
	// disallow new operators with calls to require
	'no-new-require': 'error',
	// disallow string concatenation with __dirname and __filename
	'no-path-concat': 'error',
	// disallow the use of process.exit()
	'no-process-exit': 'error',
	// disallow synchronous methods
	'no-sync': 'error'
};