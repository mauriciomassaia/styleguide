module.exports = {
  extends: [
    'eslint:recommended'
  ].concat([
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/imports'
  ].map(require.resolve)),
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {},
  rules: {}
};
