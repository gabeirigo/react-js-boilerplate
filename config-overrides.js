const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = function override(config, env) {
  config.plugins.push(new BundleAnalyzerPlugin());
  config.resolve.alias = {
    '@mock': path.join(__dirname, '/src/__mock__'),
    '@assets': path.join(__dirname, '/src/assets'),
    '@configurations': path.join(__dirname, '/src/configurations'),
    '@contexts': path.join(__dirname, '/src/contexts'),
    '@hooks': path.join(__dirname, '/src/hooks'),
    '@containers': path.join(__dirname, '/src/containers'),
    '@routes': path.join(__dirname, '/src/routes'),
    '@shared': path.join(__dirname, '/src/shared'),
  };
  return config;
};
