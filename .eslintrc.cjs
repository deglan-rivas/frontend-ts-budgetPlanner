module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-camel-case', 'svg-jsx'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    // 'react-camel-case/react-camel-case': 'error',
    "svg-jsx/camel-case-dash": "error",
    "svg-jsx/camel-case-colon": "error",
    "svg-jsx/no-style-string": "error",

  },
}
