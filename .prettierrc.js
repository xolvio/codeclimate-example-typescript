yaml = {
    files: ['*.yaml', '*.yml'],
    options: {
        tabWidth: 2,
    },
};

module.exports = {
    bracketSpacing: true,
    overrides: [yaml],
    printWidth: 80,
    quoteProps: 'consistent',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
};
