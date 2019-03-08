const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: './src/app.js',
  devServer: {
    port: 4000,
    contentBase: path.join(__dirname, "dist")
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          "presets": ["@babel/preset-env"]
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [{
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack starter',
      description: 'lorem ipsum',
      template: './index.html',
      inject: true
    })
  ]
};
