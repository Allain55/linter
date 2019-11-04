module.exports = {
	'extends': [
		'./eslint_shared.config.js'
	],
	'env': {
		'browser': true,
		'jquery' : true
	},
	'parserOptions': {
		'sourceType': 'module'
	},
	'rules': {
		'prefer-named-capture-group': 'off' // bad support and no transpile available
	}
};