const config = require('./jest.config');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...config,
  testMatch: ['**/test/integration/**/?(*.)+(spec).ts']
};