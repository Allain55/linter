module.exports = {
	'extends': [
		'plugin:import/react',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
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
		'react/jsx-indent': 'off'
	}
}