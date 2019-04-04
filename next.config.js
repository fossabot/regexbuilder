const withESLint = require("next-eslint");
const path = require("path");

module.exports = withESLint({
  target: "serverless",
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
