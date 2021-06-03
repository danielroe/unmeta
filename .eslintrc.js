module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['jest', '@typescript-eslint'],
  extends: [
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:jest/recommended',
  ],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-inferrable-types': 1,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'jest/valid-describe': 'off',
    'jest/valid-title': 'off',
    'no-dupe-class-members': 'off',
  },
}
