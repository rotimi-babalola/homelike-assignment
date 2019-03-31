/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = env => {
  const envConfig = require(`./webpack-build-utils/webpack.${env.mode}`);
  return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
};
