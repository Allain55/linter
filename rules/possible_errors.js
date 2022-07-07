module.exports = {
	// enforce “for” loop update clause moving the counter in the right direction
	'for-direction': [
		'error'
	],
	// disallow using an async function as a Promise executor
	'no-async-promise-executor': 'error',
	// disallow await inside of loops
	'no-await-in-loop': 'error',
	// disallow assignment in conditional expressions: if (a = 1)
	'no-cond-assign'          : [
		'error',
		'except-parens'
	],
	// disallow reassigning const variables
	'no-const-assign': 'error',
	// Disallow expressions where the operation doesn't affect the value
	'no-constant-binary-expression': 'error',
	// disallow constant expressions in conditions: if (true)
	'no-constant-condition'   : 'error',
	// disallow the use of debugger: debugger;
	'no-debugger'             : 'error',
	// disallow duplicate arguments in function definitions: function(a, a) {
	'no-dupe-args'            : 'error',
	// disallow duplicate conditions in if-else-if chains
	'no-dupe-else-if': 'error',
	// disallow duplicate keys in object literals
	'no-dupe-keys'            : 'error',
	// disallow duplicate case labels
	'no-duplicate-case': 'error',
	// disallow empty character classes in regular expressions
	'no-empty-character-class': 'error',
	// disallow empty block statements: if() {}
	'no-empty'                : 'error',
	// disallow reassigning exceptions in catch clauses: catch (e) { e = 10; }
	'no-ex-assign'            : 'error',
	// disallow unnecessary boolean casts: var foo = new Boolean(true); if (!!foo)
	'no-extra-boolean-cast'   : 'error',
	// disallow unnecessary semicolons
	'no-extra-semi'           : 'error',
	// disallow reassigning function declarations
	'no-func-assign': 'error',
	// disallow characters which are made with multiple code points in character class syntax
	'no-misleading-character-class': 'error',
	// disallow assigning to imported bindings
	'no-import-assign': [
		'error'
	],
	// disallow function or var declarations in nested blocks : if (true) { function f() {} }
	'no-inner-declarations'   : 'error',
	// disallow invalid regular expression strings in RegExp constructors
	'no-invalid-regexp'       : 'error',
	// disallow irregular whitespace outside of strings and comments
	'no-irregular-whitespace' : 'error',
	// disallow calling global object properties as functions
	'no-obj-calls'            : 'error',
	// disallow literal numbers that lose precision
	'no-loss-of-precision'    : 'error',
	// disallow returning values from Promise executor functions
	'no-promise-executor-return': 'error',
	// disallow use of Object.prototypes builtins directly
	'no-prototype-builtins'   : 'error',
	//  disallow multiple spaces in regular expression literals
	'no-regex-spaces'         : 'error',
	// disallow returning values from setters
	'no-setter-return'        : 'error',
	// disallow sparse arrays
	'no-sparse-arrays'        : 'error',
	// disallow confusing multiline expressions
	'no-unexpected-multiline': 'error',
	// disallow unreachable code after return, throw, continue, and break statements
	'no-unreachable'          : 'error',
	// disallow loops with a body that allows only one iteration
	'no-unreachable-loop'          : 'error',
	// disallow control flow statements in finally blocks
	'no-unsafe-finally'       : 'error',
	// disallow negating the left operand of relational operators
	'no-unsafe-negation': 'error',
	// disallow use of optional chaining in contexts where the `undefined` value is not allowed
	'no-unsafe-optional-chaining': 'error',
	// disallow unused private class members
	'no-unused-private-class-members': 'error',
	// disallow assignments that can lead to race conditions due to usage of await or yield
	'require-atomic-updates': 'error',
	//  require calls to isNaN() when checking for NaN
	'use-isnan'               : 'error',
	// enforce comparing typeof expressions against valid strings
	'valid-typeof'            : 'error'
};