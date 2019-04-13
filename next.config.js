const path = require('path');
const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = withCSS(
  withSourceMaps({
    target: 'serverless',
    // eslint-disable-next-line no-unused-vars
    webpack(config, options) {
      config.resolve.modules.push(path.resolve('./'));
      if (options.dev) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      }
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: options.dev,
          // eslint options (if necessary)
        },
      });
      config.module.rules.push({
        test: /\.jsx$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: options.dev,
          // eslint options (if necessary)
        },
      });
      return config;
    },
  })
);
