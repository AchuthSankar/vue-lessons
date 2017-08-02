const path = require('path')

const config = {
  entry: './component1.vue',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    library: 'component1'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        loader: 'vue-loader',
        test: /\.vue$/
      }
    ]
  }
}

module.exports = config
