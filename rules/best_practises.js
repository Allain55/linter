module.exports = {
// enforce return statements in callbacks of array methods
	'array-callback-return': 'warn',
	// require return statements to either always or never specify values
	'block-scoped-var': 'error',
	// enforce a maximum cyclomatic complexity allowed in a program
	'complexity': [
		'warn',
		11
	],
	// require return statements to either always or never specify values
	'consistent-return': 'error',
	// enforce consistent brace style for all control statements
	'curly': [
		'error',
		'all'
	],
	 // require default cases in switch statements
	'default-case': 'error',
	 // enforce default parameters to be last
	'default-param-last': [
		'error'
	],
	// enforce consistent newlines before and after dots
	'dot-location': [
		'error',
		'property'
	],
	// enforce dot notation whenever possible
	'dot-notation': 'error',
	// require the use of === and !==
	'eqeqeq': [
		'warn',
		'smart'
	],
	// enforce a maximum number of classes per file
	'max-classes-per-file': ['error', 1],
	// disallow the use of alert, confirm, and prompt
	'no-alert': 'error',
	// disallow the use of arguments.caller or arguments.callee
	'no-caller': 'error',
	// disallow lexical declarations in case/default clauses
	'no-case-declarations': 'error',
	// disallow division operators explicitly at the beginning of regular expressions
	'no-div-regex': 'error',
	// disallow else blocks after return statements in if statements
	'no-else-return': 'error',
	// disallow empty destructuring patterns
	'no-empty-pattern': 'error',
	// disallow null comparisons without type-checking operators
	'no-eq-null': 'error',
	// disallow empty functions
	'no-empty-function': [
		'error',
		{
			'allow': ['methods']
		}
	],
	// disallow the use of eval()
	'no-eval': 'error',
	// disallow extending native types
	'no-extend-native': 'error',
	// disallow unnecessary calls to .bind()
	'no-extra-bind': 'error',
	// disallow unnecessary labels
	'no-extra-label': 'error',
	// disallow fallthrough of case statements
	'no-fallthrough': 'error',
	// disallow leading or trailing decimal points in numeric literals
	'no-floating-decimal': 'error',
	// disallow assignments to native objects or read-only global variables
	'no-global-assign': 'error',
	// disallow var and named function declarations in the global scope
	'no-implicit-globals': 'warn',
	// disallow the use of eval()-like methods
	'no-implied-eval': 'error',
	// disallow the use of the __iterator__ property
	'no-iterator': 'error',
	// disallow labeled statements
	'no-labels': 'error',
	// disallow unnecessary nested blocks
	'no-lone-blocks': 'error',
	// disallow function declarations and expressions inside loop statements
	'no-loop-func': 'error',
	// disallow multiple spaces
	'no-multi-spaces': [
		'error',
		{
			'exceptions': {
				'Property'            : true,
				'VariableDeclarator'  : true,
				'ImportDeclaration'   : true,
				'AssignmentExpression': true
			}
		}
	],
	// disallow multiline strings
	'no-multi-str': 'error',
	// disallow new operators with the Function object
	'no-new-func': 'error',
	// disallow new operators with the String, Number, and Boolean objects
	'no-new-wrappers': 'error',
	// disallow octal escape sequences in string literals
	'no-octal-escape': 'error',
	// disallow reassigning function parameters
	'no-param-reassign': 'error',
	// disallow the use of the __proto__ property
	'no-proto': 'error',
	// disallow var redeclaration
	'no-redeclare': 'error',
	// disallow assignment operators in return statements
	'no-return-assign': [
		'error',
		'always'
	],
	// disallow javascript: urls
	'no-script-url': 'error',
	// disallow assignments where both sides are exactly the same
	'no-self-assign': 'error',
	// disallow comparisons where both sides are exactly the same
	'no-self-compare': 'error',
	// disallow comma operators
	'no-sequences': 'error',
	// disallow throwing literals as exceptions
	'no-throw-literal': 'error',
	//  disallow unused expressions
	'no-unused-expressions': [
		'error',
		{
			'allowShortCircuit': true,
			'allowTernary'     : true
		}
	],
	// disallow unnecessary calls to .call() and .apply()
	'no-useless-call': 'error',
	// disallow unnecessary escape characters
	'no-useless-escape': 'error',
	// disallow redundant return statements
	'no-useless-return': 'error',
	// disallow with statements
	'no-with': 'error',
	// enforce using named capture group in regular expression
	'prefer-named-capture-group': [
		'warn'
	],
	 // disallow use of the RegExp constructor in favor of regular expression literals
	'prefer-regex-literals': [
		'error'
	],
	// enforce the use of u flag on RegExp
	'require-unicode-regexp': [
		'error'
	],
	// require parentheses around immediate function invocations
	'wrap-iife': [
		'error',
		'outside'
	],
	// require or disallow “Yoda” conditions
	'yoda': [
		'error',
		'never'
	]
};