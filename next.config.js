const path = require("path");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  target: "serverless",
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
