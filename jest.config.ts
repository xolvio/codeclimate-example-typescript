import type { Config } from '@jest/types';

const coverage: Config.InitialOptions = {
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/node_modules'],
    coverageReporters: ['lcov', 'text'],
};

const preset: Config.InitialOptions = {
    injectGlobals: false,
    preset: 'ts-jest',
}

const config: Config.InitialOptions = {
    ...coverage,
    errorOnDeprecated: true,
    ...preset,
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/node_modules'],
};

export default config;
