const path = require('path');
const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withCSS(
  withSourceMaps({
    target: 'serverless',
    // eslint-disable-next-line no-unused-vars
    webpack(config, options) {
      config.resolve.modules.push(path.resolve('./'));
      return config;
    },
  })
);
