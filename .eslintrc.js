module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/standard",
    "prettier/react",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "indent": [
      "error",
      2
    ],
    "space-before-function-paren": "off",
    "explicit-function-return-type": "off",
    "import/first": "off",
    "camelcase": "off",
    "curly": "off",
    "require-await": "error",
    "comma-dangle": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "_"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    "react/prop-types": ["off", { ignore: ['children'] }],
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    },
    "react": {
      "version": "detect",
    },
  }
}
