module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-underscore-dangle': 0,
    'no-restricted-globals': 0,
    'linebreak-style': 0,
    'no-prototype-builtins': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-undef': 0,
  },
};
