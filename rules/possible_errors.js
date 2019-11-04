module.exports = {
	// enforce “for” loop update clause moving the counter in the right direction
	'for-direction': [
		'error'
	],
	// disallow await inside of loops
	'no-await-in-loop': 'error',
	// disallow assignment in conditional expressions: if (a = 1)
	'no-cond-assign'          : [
		'error',
		'except-parens'
	],
	// disallow constant expressions in conditions: if (true)
	'no-constant-condition'   : 'error',
	// disallow the use of debugger: debugger;
	'no-debugger'             : 'error',
	// disallow duplicate arguments in function definitions: function(a, a) {
	'no-dupe-args'            : 'error',
	// disallow duplicate keys in object literals
	'no-dupe-keys'            : 'error',
	// disallow duplicate case labels
	'no-duplicate-case': 'error',
	// // disallow assigning to imported bindings
	'no-import-assign': [
		'error'
	],
	// disallow empty character classes in regular expressions
	'no-empty-character-class': 'error',
	// disallow empty block statements: if() {}
	'no-empty'                : 'error',
	// disallow reassigning exceptions in catch clauses: catch (e) { e = 10; }
	'no-ex-assign'            : 'error',
	// disallow unnecessary boolean casts: var foo = new Boolean(true); if (!!foo)
	'no-extra-boolean-cast'   : 'error',
	//turned off because it doesn't work well for arrow functions
	// disallow unnecessary parentheses: var a = (2 * 3);
	// 'no-extra-parens'         : [
	// 	'error',
	// 	'all',
	// 	{
	// 		'nestedBinaryExpressions'		: false
	// 	}
	// ],
	// disallow unnecessary semicolons
	'no-extra-semi'           : 'error',
	// disallow reassigning function declarations
	'no-func-assign': 'error',
	// disallow function or var declarations in nested blocks : if (true) { function f() {} }
	'no-inner-declarations'   : 'error',
	// disallow invalid regular expression strings in RegExp constructors
	'no-invalid-regexp'       : 'error',
	// disallow irregular whitespace outside of strings and comments
	'no-irregular-whitespace' : 'warn',
	// disallow calling global object properties as functions
	'no-obj-calls'            : 'error',
	// disallow use of Object.prototypes builtins directly
	'no-prototype-builtins'   : 'error',
	//  disallow multiple spaces in regular expression literals
	'no-regex-spaces'         : 'warn',
	// disallow sparse arrays
	'no-sparse-arrays'        : 'error',
	// disallow confusing multiline expressions
	'no-unexpected-multiline': 'error',
	// isallow unreachable code after return, throw, continue, and break statements
	'no-unreachable'          : 'error',
	// disallow control flow statements in finally blocks
	'no-unsafe-finally'       : 'error',
	// disallow negating the left operand of relational operators
	'no-unsafe-negation': 'error',
	// disallow using an async function as a Promise executor
	'no-async-promise-executor': 'error',
	// disallow assignments that can lead to race conditions due to usage of await or yield
	'require-atomic-updates': 'error',
	//  require calls to isNaN() when checking for NaN
	'use-isnan'               : 'error',
	// enforce valid JSDoc comments
	'valid-jsdoc'             : [
		'warn',
		{
			'requireParamDescription' : false,
			'requireReturn'           : false,
			'requireReturnType'       : true,
			'requireReturnDescription': false,
			'prefer': {
				'arg'   : 'param',
				'return': 'returns'
			},
			'preferType': {
				'object' : 'Object',
				'{}'     : 'Object',
				'array'  : 'Array',
				'[]'     : 'Array',
				'Number' : 'number',
				'String' : 'string',
				'Boolean': 'boolean',
				'$'      : 'jQuery'
			}
		}

	],
	// enforce comparing typeof expressions against valid strings
	'valid-typeof'            : 'error'
};