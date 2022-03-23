const path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      common: path.resolve(__dirname, 'src/common'),
      pages: path.resolve(__dirname, 'src/pages'),
      store: path.resolve(__dirname, 'src/store'),
      services: path.resolve(__dirname, 'src/services'),
    },
    extensions: ['.js', '.jsx']
  };

  return config;
};
