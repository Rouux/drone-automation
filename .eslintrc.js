module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['google'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'comma-dangle': 'off',
		'require-jsdoc': 'off',
		'curly': ['error', 'multi-or-nest'],
		'eqeqeq': 'error',
		'no-invalid-this': 'off',
		'no-else-return': 'error',
		'no-unused-expressions': 'warn',
		'max-depth': ['error', 2],
		'max-len': [
			'error',
			{
				code: 100,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true
			}
		],
		'object-curly-spacing': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/explicit-member-accessibility': 'warn'
	}
};
