module.exports = {
	// disallow deleting variables
	'no-delete-var': 'error',
	// disallow var declarations from shadowing variables in the outer scope
	'no-shadow': 'error',
	//  disallow identifiers from shadowing restricted names
	'no-shadow-restricted-names': 'error',
	// disallow initializing variables to undefined
	'no-undef-init': 'error',
	// disallow declaration of variables that are not used in the code
	'no-unused-vars': [
		'error',
		{
			'vars': 'local',
			'args': 'after-used'
		}
	],
	// disallow the use of variables before they are defined
	'no-use-before-define': [
		'error',
		{
			'functions': false
		}
	]
};