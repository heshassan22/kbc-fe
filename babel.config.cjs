// Babel is only used by Jest here (the app itself ships native ES modules).
// Transpiling import/export to what the current Node understands lets babel-jest
// run the test files. `.cjs` so it loads regardless of "type": "module".
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
