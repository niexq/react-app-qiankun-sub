const { name } = require('./package');

module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    return config;
  },
  devServer: (configFunction) => {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);
      config.historyApiFallback = true;
      config.open = false;
      config.hot = false;
      config.watchContentBase = false;
      config.liveReload = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      return config;
    }
  }
}