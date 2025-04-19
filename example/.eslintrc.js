module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['no-empty-first-line'],
  rules: {
    'no-empty-first-line/validate': 'error',
  },
};
