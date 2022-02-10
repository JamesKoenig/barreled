module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jquery": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            2,
            { "SwitchCase": 1,
              // https://github.com/airbnb/javascript/blob/e9fff7adbf6dd4e3723c12849c407aafd429cf0f/packages/eslint-config-airbnb-base/rules/style.js#L141
              "ignoredNodes": [
                'JSXElement', 'JSXElement > *', 'JSXAttribute',
                'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression',
                'JSXSpreadAttribute', 'JSXExpressionContainer',
                'JSXOpeningElement', 'JSXClosingElement', 'JSXText',
                'JSXEmptyExpression', 'JSXSpreadChild'
              ],
            },
        ],
        "no-fallthrough" : [
          "error",
          { "commentPattern": "break[\\s\\w]*omitted" },
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-trailing-spaces": [
          "error",
        ],
        "react/prop-types": 0,
    },
    "settings": {
        "react": {
          "version": "detect"
        }
    },
    "overrides": [{
        "files": ["*.js", "*.jsx"],
    }],
    "globals": {
      "process": true,
    },
};
