const bestPractises  = require('./rules/best_practises'),
	  possibleErrors = require('./rules/possible_errors'),
	  variables 	 = require('./rules/variables'),
	  strictRules 	 = require('./rules/strict'),
	  stylistic 	 = require('./rules/stylistic'),
	  es6Rules 		 = require('./rules/ecmascript_6');

module.exports = {
	'parserOptions': {
		'ecmaVersion': 2020
	},
	'rules': {
		...possibleErrors,
		...bestPractises,
		...variables,
		...stylistic,
		...es6Rules,
		...strictRules
	}
};