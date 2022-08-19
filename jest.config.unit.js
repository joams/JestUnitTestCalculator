const config = require('./jest.config');
const coverageOptions = {
    collectCoverage: true,
    coverageReporters: ['text', 'text-summary'],
    coverageThreshold: {
      global: {
        branches: 75,
        functions: 75,
        lines: 75,
        statements: 75,
      },
    },
  }

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...config,
  ...coverageOptions,
  testMatch: ['**/test/unit/**/?(*.)+(spec).ts']
};