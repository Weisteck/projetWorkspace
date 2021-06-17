const path = require("path");

module.exports = {
  // local Laravel server address for api proxy
  devServer: {
    proxy: {
      '^api': {
        target: 'http://localhost:8000/',
        ws: true,
        changeOrigin: true
      },
    }
  },

  outputDir: path.resolve(__dirname, '../back/public/dist'),
  publicPath: '/dist',

  indexPath: path.resolve(__dirname, '../back/resources/views/index.html')
}
