'use strict';

/** @type {import('prettier').Options} */
module.exports = {
    bracketSpacing: true,
    printWidth: 80,
    quoteProps: 'consistent',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    useTabs: false,

    importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,

    overrides: [
        {
            name: 'JavaScript',
            files: ['*.js'],
            options: {
                trailingComma: 'es5',
            },
        },
        {
            name: 'YAML',
            files: ['*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
