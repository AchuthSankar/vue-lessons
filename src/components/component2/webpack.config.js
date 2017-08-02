const path = require('path')

const config = {
  entry: './component2.vue',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    library: 'component2'
  },
  module: {
    rules: [
      {
        loader: 'vue-loader',
        test: /\.vue$/
      }
    ]
  }
}

module.exports = config
