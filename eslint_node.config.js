const nodeJsRules = require('./rules/node');

module.exports = {
	'extends': [
		'./eslint_shared.config.js',
		'plugin:node/recommended'
	],
	'env': {
		'node': true
	},
	'globals': {
		'sails'    : true,
		'logger'   : true,
		'tinyUtils': true,
	},
	'rules': nodeJsRules
};