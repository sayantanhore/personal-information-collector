var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const PATHS = {
  icons: path.join(__dirname, 'icons')
};
module.exports = {
  entry: "./src/app.js",
  output: {path: __dirname, filename: './dist/bundle.js'},
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [{
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /.scss$/,
      //loaders: ['style-loader', 'css-loader', 'sass-loader']
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
    }, {
      test: /.svg$/,
      loader: 'file',
      include: PATHS.icons
    }]
  },
  plugins: [
    new ExtractTextPlugin('./dist/styles/[name].css', {
      allChunks: true
    })
  ]
}
