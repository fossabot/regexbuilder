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
  plugins: ['react', 'prettier', 'import'],
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
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
};
