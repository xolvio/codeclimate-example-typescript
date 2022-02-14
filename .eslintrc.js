/* eslint-disable @typescript-eslint/no-var-requires */
const jest = require('jest/package.json');

module.exports = {
    env: {
        es2022: true,
        jest: false,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'jest'],
    rules: {},
    settings: {
        jest: {
            version: jest.version,
        },
    },
};
