'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'jest'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.lint.json'],
    },
    reportUnusedDisableDirectives: true,
    settings: {
        jest: {
            version: require('jest/package.json').version, // eslint-disable-line
        },
    },
    rules: {},

    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
