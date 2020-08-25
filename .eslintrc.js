// eslint-disable
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // the TypeScript parser we installed earlier
  parserOptions: {
    ecmaFeatures: { jsx: true } // Allows for the parsing of JSX
  },
  extends: [
    'eslint:recommended', // eslint default rules
    'plugin:@typescript-eslint/eslint-recommended', // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    "plugin:jsx-a11y/recommended", // accessibility plugin
  ],
  rules: {
    'react/prop-types': 'off', // We turn off prop-types rule, as we will use TypeScript's types instead.
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tx", ".tsx"] }],
  },
  "env": {
    "jest": true
  }
};