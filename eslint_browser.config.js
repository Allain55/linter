module.exports = {
	'extends': [
		'align-assignments',
		'./eslint_shared.config.js'
	],
	'env': {
		'browser': true,
		'jquery' : true
	},
	'parserOptions': {
		'sourceType': 'module'
	}
};