const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    filterTags: './src/js/filterTags.js',
    test: './src/js/test.js'
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
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new webpack.HotModuleReplacementPlugin(),
    // Landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'filterTags']
    }),

    // Error Pages
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/505.html',
      filename: './505.html'
    }),

    // Main sections
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks.html',
      filename: './tricks.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots.html',
      filename: './spots.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill.html',
      filename: './chill.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips.html',
      filename: './tips.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index', 'filterTags']
    }),

    // Section 'Tricks' articles
    // Tricks Skate
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate1.html',
      filename: './tricks/tricksSkate1.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate2.html',
      filename: './tricks/tricksSkate2.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate3.html',
      filename: './tricks/tricksSkate3.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate4.html',
      filename: './tricks/tricksSkate4.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate5.html',
      filename: './tricks/tricksSkate5.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate6.html',
      filename: './tricks/tricksSkate6.html',
      chunks: ['index', 'filterTags']
    }),
    // Tricks BMX
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx1.html',
      filename: './tricks/tricksBmx1.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx2.html',
      filename: './tricks/tricksBmx2.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx3.html',
      filename: './tricks/tricksBmx3.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx4.html',
      filename: './tricks/tricksBmx4.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx5.html',
      filename: './tricks/tricksBmx5.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx6.html',
      filename: './tricks/tricksBmx6.html',
      chunks: ['index', 'filterTags']
    }),
    // Tricks Scooter
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter1.html',
      filename: './tricks/tricksScooter1.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter2.html',
      filename: './tricks/tricksScooter2.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter3.html',
      filename: './tricks/tricksScooter3.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter4.html',
      filename: './tricks/tricksScooter4.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter5.html',
      filename: './tricks/tricksScooter5.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter6.html',
      filename: './tricks/tricksScooter6.html',
      chunks: ['index', 'filterTags']
    }),
    // Section 'Spots' articles
    new HtmlWebpackPlugin({
      template: './src/spots/spots1.html',
      filename: './spots/spots1.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots2.html',
      filename: './spots/spots2.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots3.html',
      filename: './spots/spots3.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots4.html',
      filename: './spots/spots4.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots5.html',
      filename: './spots/spots5.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots6.html',
      filename: './spots/spots6.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots7.html',
      filename: './spots/spots7.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots8.html',
      filename: './spots/spots8.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots9.html',
      filename: './spots/spots9.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots10.html',
      filename: './spots/spots10.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots11.html',
      filename: './spots/spots11.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots12.html',
      filename: './spots/spots12.html',
      chunks: ['index', 'filterTags']
    }),
    // Section 'Chill' articles
    // Fun Slangs
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs1.html',
      filename: './chill/funSlangs1.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs2.html',
      filename: './chill/funSlangs2.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs3.html',
      filename: './chill/funSlangs3.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs4.html',
      filename: './chill/funSlangs4.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs5.html',
      filename: './chill/funSlangs5.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs6.html',
      filename: './chill/funSlangs6.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs7.html',
      filename: './chill/funSlangs7.html',
      chunks: ['index', 'filterTags']
    }),
    // Fun Films
    new HtmlWebpackPlugin({
      template: './src/chill/funFilms1.html',
      filename: './chill/funFilms1.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funFilms2.html',
      filename: './chill/funFilms2.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funFilms3.html',
      filename: './chill/funFilms3.html',
      chunks: ['index', 'filterTags']
    }),
    // Fun Music
    new HtmlWebpackPlugin({
      template: './src/chill/funMusic1.html',
      filename: './chill/funMusic1.html',
      chunks: ['index', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funMusic1.html',
      filename: './chill/funMusic1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funMusic2.html',
      filename: './chill/funMusic2.html'
    }),

    // Articles
    new HtmlWebpackPlugin({
      template: './src/tips/tips1.html',
      filename: './tips/tips1.html',
      chunks: ['index', 'filterTags']
    }),
    // Components
    new HtmlWebpackPlugin({
      template: './src/components.html',
      filename: './components.html',
      chunks: ['index', 'filterTags']
    }),
    // Tests
    new HtmlWebpackPlugin({
      template: './src/quiz/test1.html',
      filename: './quiz/test1.html',
      chunks: ['index', 'test']
    }),

    // // Section 'Tips' articles
    // new HtmlWebpackPlugin({
    //   template: './src/tips/tips-articles.html',
    //   filename: './tips/tips-articles.html'
    // }),

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
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footerPartial',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/nav.html'),
        location: 'navPartial',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/banner-question.html'),
        location: 'bannerQuestion',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ]
  // optimization: {
  //   minimizer: [new CssMinimizerPlugin()]
  // }
}
