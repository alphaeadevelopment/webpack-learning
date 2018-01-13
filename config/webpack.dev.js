const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const extractScss = new ExtractTextPlugin({ filename: "style.css", allChunks: true })

const VENDOR_LIBS = [
  'lodash/camelCase', 'lodash',
]

var config = {
  entry: {
    main: path.join(__dirname, '../src', 'index.js'),
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].[chunkhash].js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: extractScss.extract({
          use: [{
            loader: 'css-loader',
            options: {
              localIdentName: '[path]__[name]__[local]__[hash:base64:5]',
              modules: true,
              camelCase: true,
            }
          }, {
            loader: 'sass-loader',
          }]
        }),
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
            },
          }, {
            loader: 'image-webpack-loader',
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'branding': path.join(__dirname, '../styles/branding'),
      'mixins': path.join(__dirname, '../styles/mixins')
    }
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist']),
    extractScss,
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'BUTTON1_TEXT': JSON.stringify("Show Text"),
      'BUTTON2_TEXT': JSON.stringify("Show Images"),
    }),
    new webpack.ProvidePlugin({
      'lodash': 'lodash',
    }),
    new BundleAnalyzerPlugin({
      // generateStatsFile: true,
    })
    // new UglifyJsPlugin(),
  ]
}

module.exports = config
