module.exports = {
	// enforce consistent spacing inside array brackets
	'array-bracket-spacing': [
		'error',
		'never'
	],
	// enforce consistent spacing inside single-line blocks
	'block-spacing': [
		'error',
		'always'
	],
	// enforce consistent brace style for blocks
	'brace-style': [
		'error',
		'1tbs',
		{
			'allowSingleLine': true
		}
	],
	// enforce camelcase naming convention
	'camelcase': [
		'error',
		{
			'properties': 'always'
		}
	],
	// require or disallow trailing commas
	'comma-dangle': [
		'error',
		'never'
	],
	// enforce consistent spacing before and after commas
	'comma-spacing': [
		'error',
		{
			'before': false,
			'after' : true
		}
	],
	// enforce consistent comma style
	'comma-style': [
		'error',
		'last'
	],
	//  enforce consistent spacing inside computed property brackets
	'computed-property-spacing': [
		'error',
		'never'
	],
	'eol-last': [
		'error',
		'never'
	],

	// enforce line breaks between arguments of a function call
	'function-call-argument-newline': [
		'error',
		'consistent'
	],
	// require or disallow spacing between function identifiers and their invocations
	'func-call-spacing': 'error',
	// enforce the consistent use of either function declarations or expressions
	'func-style': [
		'warn',
		'expression'
	],
	// enforce consistent line breaks inside function parentheses
	'function-paren-newline': [
		'error',
		'consistent'
	],
	// disallow specified identifiers
	'id-blacklist': [
		'warn',
		'data'
	],
	// enforce minimum and maximum identifier lengths
	'id-length': [
		'error',
		{
			'min': 2,
			'exceptions': [
				'$', 'i', 'j', '_'
			]
		}
	],
	// require identifiers to match a specified regular expression
	'id-match': [
		'error'
	],
	// Enforce the location of arrow function bodies with implicit returns
	'implicit-arrow-linebreak': 'error',
	// enforce consistent indentation
	'indent': [
		'error',
		'tab', //todo: use 2 spaces and "first" for consts?
		{
			'MemberExpression': 'off',
			'VariableDeclarator': 1,
			'ObjectExpression': 'first',
			'FunctionDeclaration': {
				'body'		: 1,
				'parameters': 'first'
			},
			'ignoredNodes': ['ConditionalExpression']
		}
	],
	// enforce consistent spacing before and after keywords
	'keyword-spacing': [
		'error',
		{
			'before': true,
			'after': true
		}
	],
	// enforce a maximum depth that blocks can be nested
	'max-depth': [
		'error',
		5
	],
	//todo put it back
	// enforce a maximum line length
	// 'max-len': [
	// 	'warn',
	// 	{
	// 		'code'    : 120,
	// 		'comments': 120
	// 	}
	// ],
	//todo put it back
	// enforce a maximum number of line of code in a function
	// 'max-lines-per-function': [
	// 	'warn',
	// 	{
	// 		'max': 50,
	// 		'skipBlankLines': true,
	// 		'skipComments': true,
	// 		'IIFEs': true
	// 	}
	// ],
	// enforce a maximum depth that callbacks can be nested
	'max-nested-callbacks': [
		'error',
		3
	],
	// enforce a maximum number of parameters in function definitions
	'max-params': [
		'error',
		4
	],
	// enforce a maximum number of statements allowed per line
	'max-statements-per-line': [
		'error',
		{
			'max': 1
		}
	],
	// enforce a particular style for multiline comments
	'multiline-comment-style': [
		'error',
		'starred-block'
	],
	// require constructor function names to begin with a capital letter
	'new-cap': [
		'error',
		{
			'capIsNewExceptions': [
				'$.Event',
				'$.Deferred'
			]
		}
	],
	// require parentheses when invoking a constructor with no arguments
	'new-parens': [
		'error'
	],
	// require a newline after each call in a method chain
	'newline-per-chained-call': [
		'error',
		{
			'ignoreChainWithDepth': 4
		}
	],
	// disallow Array constructors
	'no-array-constructor': [
		'error'
	],
	// disallow bitwise operators
	'no-bitwise': [
		'warn'
	],
	// disallow if statements as the only statement in else blocks
	'no-lonely-if': [
		'warn'
	],
	// Disallow mixes of different operators
	'no-mixed-operators': [
		'error'
	],
	// disallow mixed spaces and tabs for indentation
	'no-mixed-spaces-and-tabs': [
		'error',
		'smart-tabs'
	],
	// disallow multiple empty lines
	'no-multiple-empty-lines': [
		'error'
	],
	// disallow negated conditions
	'no-negated-condition': [
		'error'
	],
	// disallow nested ternary expressions
	'no-nested-ternary': [
		'warn'
	],
	// disallow Object constructors
	'no-new-object': [
		'error'
	],
	// disallow specified syntax
	'no-restricted-syntax': [
		'error',
		'DebuggerStatement',
		'WithStatement'
	],
	// disallow trailing whitespace at the end of lines
	'no-trailing-spaces': [
		'warn'
	],
	// disallow ternary operators when simpler alternatives exist
	'no-unneeded-ternary': [
		'error'
	],
	// disallow whitespace before properties
	'no-whitespace-before-property': [
		'error'
	],
	// enforce consistent line breaks inside braces
	'object-curly-newline': [
		'error',
		{
			'ImportDeclaration': 'never',
			'ExportDeclaration': 'never'
		}
	],
	// enforce consistent spacing inside braces
	'object-curly-spacing': [
		'error'
	],
	// enforce variables to be declared either together or separately in functions
	'one-var': [
		'error',
		{
			'let'   		  : 'consecutive',
			'const'			  : 'consecutive',
			'separateRequires': true
		}
	],
	// enforce consistent linebreak style for operators
	'operator-linebreak': [
		'error',
		'after',
		{
			'overrides': {
				'?': 'before',
				':': 'before'
			}
		}
	],
	// Require or disallow padding lines between statements
	'padding-line-between-statements': [
		'error',
		{
			'blankLine': 'always',
			'prev': '*',
			'next': ['break', 'cjs-export', 'class', 'const', 'for', 'if', 'let', 'return', 'try', 'var']
		}
	],
	// require or disallow padding within blocks
	'padded-blocks': [
		'error',
		{
			'blocks': 'never'
		}
	],
	// require quotes around object literal property names
	'quote-props': [
		'error',
		'consistent'
	],
	// enforce the consistent use of either backticks, double, or single quotes
	'quotes': [
		'error',
		'single',
		{
			'avoidEscape': true
		}
	],
	// enforce consistent spacing before and after semicolons
	'semi-spacing': [
		'error'
	],
	// require or disallow semicolons instead of ASI
	'semi': [
		'error',
		'always'
	],
	// enforce consistent spacing before blocks
	'space-before-blocks': [
		'error'
	],
	// enforce consistent spacing before function definition opening parenthesis
	'space-before-function-paren': [
		'error',
		'never'
	],
	// enforce consistent spacing inside parentheses
	'space-in-parens': [
		'error'
	],
	// require spacing around operators
	'space-infix-ops': [
		'error'
	],
	// enforce consistent spacing before or after unary operators
	'space-unary-ops': [
		'error'
	],
	// enforce consistent spacing after the // or /* in a comment
	'spaced-comment': [
		'error'
	],
	// require parenthesis around regex literals
	'wrap-regex': [
		'error'
	]
};