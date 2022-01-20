module.exports = {
	extends: ['eslint-config-particle'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	env: {
		commonjs: true,
		es6: true,
		node: true,
		mocha: true
	},
	rules: {
		'max-statements': ['warn', 50]
	}
};
