module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:react/recommended',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import', 'jest'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'react/jsx-one-expression-per-line': [0],
    'react/destructuring-assignment': [0],
    'react/prefer-stateless-function': [0],
    'arrow-body-style': ['error', 'as-needed'],
    'jsx-a11y/anchor-is-valid': [0],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
};
