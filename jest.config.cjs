// `.cjs` so it loads even though package.json sets "type": "module".
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/public/unit-testing'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
