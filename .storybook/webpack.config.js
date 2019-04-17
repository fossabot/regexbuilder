const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.modules.push(path.resolve('./'));
  config.module.rules.push({
    test: /_\.story\.jsx$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
    include: [path.resolve(__dirname, '../components')],
  });
  return config;
};
