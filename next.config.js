const path = require('path');

module.exports = {
  webpack: (config) => {

    // resolve "@emotion/core" and related dependencies locally
    config.resolve.alias['@emotion/core'] = path.resolve('./node_modules/@emotion/core');
    config.resolve.alias['@emotion/styled'] = path.resolve('./node_modules/@emotion/styled');
    config.resolve.alias['emotion-theming'] = path.resolve('./node_modules/emotion-theming');

    return config
  },
}