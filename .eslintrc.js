module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.2.0"
    },
    "import/resolver": {
      webpack: {
        config: "webpack.config.js"
      }
    }
  }
};
