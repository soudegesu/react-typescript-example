module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '/public/'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  timers: 'fake',
};
