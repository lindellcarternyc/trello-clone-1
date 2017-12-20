const webpack = require('webpack')
const path = require('path')

const src = path.join(__dirname, 'src')
const config = {
  devServer: {
    hot: true,
    inline: true,
  },
  entry: {
    index: path.join(src, 'index.html')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  }
}

module.exports = config