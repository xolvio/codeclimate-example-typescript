import type { Config } from '@jest/types';
import type { InitialOptionsTsJest } from 'ts-jest';

const pathIgnorePatterns: string[] = [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
];

const coverage: Config.InitialOptions = {
    collectCoverage: false, // enable via --coverage instead
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: pathIgnorePatterns,
    coverageReporters: ['lcov', 'text'],
};

// https://github.com/kulshekhar/ts-jest/issues/748#issuecomment-885399102
const typescript: InitialOptionsTsJest = {
    globals: {
        'ts-jest': {
            compiler: 'typescript',
            tsconfig: '<rootDir>/tsconfig.base.json',
        },
    },
};

const config: Config.InitialOptions = {
    ...coverage,
    errorOnDeprecated: true,
    injectGlobals: false,
    preset: 'ts-jest',
    roots: ['<rootDir>/src/'],
    testEnvironment: 'node',
    testPathIgnorePatterns: pathIgnorePatterns,
    ...typescript,
};

export default config;
