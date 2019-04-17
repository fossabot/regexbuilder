const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  target: 'serverless',
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
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
});
