/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: ['eslint:recommended'],
    plugins: ['@typescript-eslint', 'plugin:@typescript-eslint/recommended'],
    ignorePatterns: ['dist/*'],
    rules: {
        'eol-last': ['error', 'always'],
        semi: ['error', 'always'],
        'no-unused-vars': ['off', { args: 'all' }],
        '@typescript-eslint/no-unused-vars': 'warn',
    },
    root: true,
};

module.exports = config;
