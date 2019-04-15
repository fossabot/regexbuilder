// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = async ({ config, mode }) => {
  config.resolve.modules.push(path.resolve('./'));
  config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
  config.module.rules.push({
    test: /_\.story\.jsx$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
    include: [path.resolve(__dirname, '../components')],
  });
  return config;
};
