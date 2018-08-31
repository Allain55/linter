module.exports = {
	// require braces around arrow function bodies
	'arrow-body-style': [
		'error',
		'as-needed'
	],
	// require parentheses around arrow function arguments
	'arrow-parens': 'error',
	// enforce consistent spacing before and after the arrow in arrow functions
	'arrow-spacing':
		[
			'error',
			{
				'before': true,
				'after' : true
			}
		],
	// require super() calls in constructors
	'constructor-super': 'error',
	// enforce consistent spacing around * operators in generator functions
	'generator-star-spacing': [
		'error', {
			'before': true,
			'after' : false
		}
	],
	// disallow reassigning class members
	'no-class-assign': 'error',
	// disallow reassigning const variables
	'no-const-assign': 'error',
	// disallow duplicate class members
	'no-dupe-class-members': 'error',
	// disallow duplicate module imports
	'no-duplicate-imports': 'error',
	// disallow new operators with the Symbol object
	'no-new-symbol': 'error',
	// disallow this/super before calling super() in constructors
	'no-this-before-super': 'error',
	// disallow unnecessary computed property keys in object literals
	'no-useless-computed-key': 'error',
	// disallow unnecessary constructors
	'no-useless-constructor': 'error',
	// disallow renaming import, export, and destructured assignments to the same name
	'no-useless-rename': 'error',
	// require let or const instead of var
	'no-var': 'error',
	// require const declarations for variables that are never reassigned after declared
	'prefer-const': 'error',
	'prefer-promise-reject-errors': 'error',
	// require rest parameters instead of arguments
	'prefer-rest-params': 'error',
	// require spread operators instead of .apply()
	'prefer-spread': 'error',
	// require template literals instead of string concatenation
	'prefer-template': 'error',
	// enforce spacing between rest and spread operators and their expressions
	'rest-spread-spacing': [
		'error',
		'never'
	],
	// require symbol descriptions
	'symbol-description': 'error',
	// require or disallow spacing around embedded expressions of template strings
	'template-curly-spacing': 'error',
	// require or disallow spacing around the * in yield* expressions
	'yield-star-spacing': [
		'error',
		'after'
	]
};