const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // Main sections
    new HtmlWebpackPlugin({
      template: './src/art.html',
      filename: './art.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/skateboarding.html',
      filename: './skateboarding.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/music.html',
      filename: './music.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/fashion.html',
      filename: './fashion.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/dance.html',
      filename: './dance.html'
    }),

    // Section 'Art' articles
    new HtmlWebpackPlugin({
      template: './src/art/art-articles.html',
      filename: './art/art-articles.html'
    }),
    // Section 'Skateboarding' articles
    new HtmlWebpackPlugin({
      template: './src/skateboarding/skateboarding-articles.html',
      filename: './skateboarding/skateboarding-articles.html'
    }),
    // Section 'Music' articles
    new HtmlWebpackPlugin({
      template: './src/music/music-articles.html',
      filename: './music/music-articles.html'
    }), // Section 'Fashion' articles
    new HtmlWebpackPlugin({
      template: './src/fashion/fashion-articles.html',
      filename: './fashion/fashion-articles.html'
    }), // Section 'Dance' articles
    new HtmlWebpackPlugin({
      template: './src/dance/dance-articles.html',
      filename: './dance/dance-articles.html'
    }),

    // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
