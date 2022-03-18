module.exports = {
  swcMinify: false,
  reactStrictMode: true,
// ここから
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  }
}