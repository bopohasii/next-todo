module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: [
    'text',
    'text-summary',
    'text-lcov',
    'lcov',
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/*.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  testMatch: [
    '**/components/**/*.spec.js',
  ],
};
