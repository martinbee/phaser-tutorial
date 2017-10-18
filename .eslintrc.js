module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "rules": {
    "spaced-comment": 0,
    "no-console": 0,
    "no-underscore-dangle": 0
  },
  "globals": {
    "phaser": true
  },
  "plugins": [
    "import"
  ],
  "parser": "babel-eslint",
  "settings": {
    "import/core-modules": [ "phaser", "pixi", "p2" ]
  }
};
