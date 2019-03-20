module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: [
    "eslint:recommended",
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:import/warnings",
  ],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "import"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    "react/jsx-one-expression-per-line": [0],
    "react/destructuring-assignment": [0],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["./"],
      },
    },
  },
};
