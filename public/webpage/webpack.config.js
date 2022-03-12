const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const vendorScripts = ['popper.js', 'bootstrap'];
// const vendorStyles = [
//   { from: 'node_modules/slick-carousel/slick/slick.css', to: path.resolve(__dirname, 'dist/css/') },
//   { from: 'node_modules/slick-carousel/slick/slick-theme.css', to: path.resolve(__dirname, 'dist/css/') },
//   { from: 'node_modules/slick-lightbox/dist/slick-lightbox.css', to: path.resolve(__dirname, 'dist/css/') },
//   { from: 'node_modules/flickity/dist/flickity.css', to: path.resolve(__dirname, 'dist/css/') }
// ];

module.exports = {
  entry: {
    'theme': './src/js/theme.js',
    'vendors': vendorScripts
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: vendorStyles
    // })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js')
  },
  externals: {
    jquery: 'jQuery',
    // Drupal: 'Drupal',
    // drupalSettings: 'drupalSettings',
    // Flickity: 'Flickity'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
