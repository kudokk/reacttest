module.exports = {
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
    '!src/client/**/*.stories.tsx',
    '!src/**/*.d.ts',
    '!src/client/index.tsx',
    '!src/server/index.ts',
    '!src/server/server.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  testMatch: ['**/src/**/*.test.(ts|tsx)?(x)'],
  setupTestFrameworkScriptFile: '<rootDir>/setupTest.ts'
};
