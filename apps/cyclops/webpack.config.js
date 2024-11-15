const { composePlugins, withNx } = require('@nx/webpack');

module.exports = composePlugins(
  // Default Nx composable plugin
  withNx(),
  // Custom composable plugin
  // eslint-disable-next-line unused-imports/no-unused-vars
  (config) => {
    // `config` is the Webpack configuration object
    // customize configuration here
    return config;
  }
);