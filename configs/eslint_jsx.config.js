module.exports = {
	'extends': [
		'plugin:import/react',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
		'airbnb',
		'airbnb/hooks',
		'./eslint_browser.config.js',
	],
	'parserOptions': {
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'settings': {
		'react': {
			'version': 'detect',
		}
	},
	'rules': {
		'class-methods-use-this': 'off',
		//todo remove this deprecated rule when airbnb removes it
		'global-require': 'off',
		//todo: use my own indent later
		'indent': 'off',
		'linebreak-style': 'off',
		'lines-between-class-members': 'off',
		'no-tabs': 'off',
		'no-plusplus': 'off',
		'no-new': 'off',
		'no-underscore-dangle': 'off',
		'radix': 'off',
		
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		
		'react/destructuring-assignment': 'off',
		'react/forbid-prop-types': [
			'error',
			{
				forbid: ['any']
			}
		],
		'react/require-default-props': 'off',
		'react/static-property-placement': [
			'error',
			'static public field',
		],
		'react/jsx-indent': 'off',
		//todo: this breaks indentation, check is later
		'react/jsx-indent-props': 'off',
		'react/jsx-no-target-blank': [
			'error',
			{
				'allowReferrer': true, //we don't support older browser where this could le to problems
			}
		],
		'react/jsx-one-expression-per-line': 'off',
	}
}