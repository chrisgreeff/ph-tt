module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  },
  "plugins": [
    "babel"
  ]
};