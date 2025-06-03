const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const webpack = require('webpack')
const path = require('path')

const paths = [
  '/spot/',
  '/spot/about.html',
  '/spot/components.html',
  '/spot/404.html',
  '/spot/505.html',
  '/spot/chill.html',
  '/spot/spots.html',
  '/spot/styleguide.html',
  '/spot/tips.html',
  '/spot/tricks.html',
  '/spot/tricks/tricksBmx1.html',
  '/spot/tricks/tricksBmx2.html',
  '/spot/tricks/tricksBmx3.html',
  '/spot/tricks/tricksBmx4.html',
  '/spot/tricks/tricksBmx5.html',
  '/spot/tricks/tricksBmx6.html',
  '/spot/tricks/tricksScooter1.html',
  '/spot/tricks/tricksScooter2.html',
  '/spot/tricks/tricksScooter3.html',
  '/spot/tricks/tricksScooter4.html',
  '/spot/tricks/tricksScooter5.html',
  '/spot/tricks/tricksScooter6.html',
  '/spot/tricks/tricksSkate1.html',
  '/spot/tricks/tricksSkate2.html',
  '/spot/tricks/tricksSkate3.html',
  '/spot/tricks/tricksSkate4.html',
  '/spot/tricks/tricksSkate5.html',
  '/spot/tricks/tricksSkate6.html',
  '/spot/tips/tips1.html',
  '/spot/tips/tips2.html',
  '/spot/tips/tips3.html',
  '/spot/tips/tips4.html',
  '/spot/tips/tips5.html',
  '/spot/tips/tips6.html',
  '/spot/tips/tips7.html',
  '/spot/tips/tips8.html',
  '/spot/tips/tips9.html',
  '/spot/tips/tips10.html',
  '/spot/tips/tips11.html',
  '/spot/tips/tips12.html',
  '/spot/tips/tips13.html',
  '/spot/spots/spots1.html',
  '/spot/spots/spots2.html',
  '/spot/spots/spots3.html',
  '/spot/spots/spots4.html',
  '/spot/spots/spots5.html',
  '/spot/spots/spots6.html',
  '/spot/spots/spots7.html',
  '/spot/spots/spots8.html',
  '/spot/spots/spots9.html',
  '/spot/spots/spots10.html',
  '/spot/spots/spots11.html',
  '/spot/spots/spots12.html',
  '/spot/quiz/test1.html',
  '/spot/chill/funFilms1.html',
  '/spot/chill/funFilms2.html',
  '/spot/chill/funFilms3.html',
  '/spot/chill/funMusic1.html',
  '/spot/chill/funMusic2.html',
  '/spot/chill/funSlangs1.html',
  '/spot/chill/funSlangs2.html',
  '/spot/chill/funSlangs3.html',
  '/spot/chill/funSlangs4.html',
  '/spot/chill/funSlangs5.html',
  '/spot/chill/funSlangs6.html',
  '/spot/chill/funSlangs7.html'
]

module.exports = {
  entry: {
    index: './src/index.js',
    filterTags: './src/js/filterTags.js',
    test: './src/js/test.js',
    menu: './src/js/menu.js'
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
      chunks: ['index', 'menu']
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
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks.html',
      filename: './tricks.html',
      chunks: ['index', 'filterTags', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots.html',
      filename: './spots.html',
      chunks: ['index', 'filterTags', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill.html',
      filename: './chill.html',
      chunks: ['index', 'filterTags', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips.html',
      filename: './tips.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index', 'menu']
    }),

    // Section 'Tricks' articles
    // Tricks Skate
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate1.html',
      filename: './tricks/tricksSkate1.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate2.html',
      filename: './tricks/tricksSkate2.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate3.html',
      filename: './tricks/tricksSkate3.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate4.html',
      filename: './tricks/tricksSkate4.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate5.html',
      filename: './tricks/tricksSkate5.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksSkate6.html',
      filename: './tricks/tricksSkate6.html',
      chunks: ['index', 'menu']
    }),
    // Tricks BMX
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx1.html',
      filename: './tricks/tricksBmx1.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx2.html',
      filename: './tricks/tricksBmx2.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx3.html',
      filename: './tricks/tricksBmx3.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx4.html',
      filename: './tricks/tricksBmx4.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx5.html',
      filename: './tricks/tricksBmx5.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksBmx6.html',
      filename: './tricks/tricksBmx6.html',
      chunks: ['index', 'menu']
    }),
    // Tricks Scooter
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter1.html',
      filename: './tricks/tricksScooter1.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter2.html',
      filename: './tricks/tricksScooter2.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter3.html',
      filename: './tricks/tricksScooter3.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter4.html',
      filename: './tricks/tricksScooter4.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter5.html',
      filename: './tricks/tricksScooter5.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tricks/tricksScooter6.html',
      filename: './tricks/tricksScooter6.html',
      chunks: ['index', 'menu']
    }),
    // Section 'Spots' articles
    new HtmlWebpackPlugin({
      template: './src/spots/spots1.html',
      filename: './spots/spots1.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots2.html',
      filename: './spots/spots2.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots3.html',
      filename: './spots/spots3.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots4.html',
      filename: './spots/spots4.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots5.html',
      filename: './spots/spots5.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots6.html',
      filename: './spots/spots6.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots7.html',
      filename: './spots/spots7.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots8.html',
      filename: './spots/spots8.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots9.html',
      filename: './spots/spots9.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots10.html',
      filename: './spots/spots10.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots11.html',
      filename: './spots/spots11.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/spots/spots12.html',
      filename: './spots/spots12.html',
      chunks: ['index', 'menu']
    }),
    // Section 'Chill' articles
    // Fun Slangs
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs1.html',
      filename: './chill/funSlangs1.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs2.html',
      filename: './chill/funSlangs2.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs3.html',
      filename: './chill/funSlangs3.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs4.html',
      filename: './chill/funSlangs4.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs5.html',
      filename: './chill/funSlangs5.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs6.html',
      filename: './chill/funSlangs6.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funSlangs7.html',
      filename: './chill/funSlangs7.html',
      chunks: ['index', 'menu']
    }),
    // Fun Films
    new HtmlWebpackPlugin({
      template: './src/chill/funFilms1.html',
      filename: './chill/funFilms1.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funFilms2.html',
      filename: './chill/funFilms2.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funFilms3.html',
      filename: './chill/funFilms3.html',
      chunks: ['index', 'menu']
    }),
    // Fun Music
    new HtmlWebpackPlugin({
      template: './src/chill/funMusic1.html',
      filename: './chill/funMusic1.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/chill/funMusic2.html',
      filename: './chill/funMusic2.html',
      chunks: ['index', 'menu']
    }),

    // Articles
    new HtmlWebpackPlugin({
      template: './src/tips/tips1.html',
      filename: './tips/tips1.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips2.html',
      filename: './tips/tips2.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips3.html',
      filename: './tips/tips3.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips4.html',
      filename: './tips/tips4.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips5.html',
      filename: './tips/tips5.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips6.html',
      filename: './tips/tips6.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips7.html',
      filename: './tips/tips7.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips8.html',
      filename: './tips/tips8.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips9.html',
      filename: './tips/tips9.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips10.html',
      filename: './tips/tips10.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips11.html',
      filename: './tips/tips11.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips12.html',
      filename: './tips/tips12.html',
      chunks: ['index', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tips/tips13.html',
      filename: './tips/tips13.html',
      chunks: ['index', 'menu']
    }),
    // Components
    new HtmlWebpackPlugin({
      template: './src/components.html',
      filename: './components.html',
      chunks: ['index', 'menu']
    }),
    // Tests
    new HtmlWebpackPlugin({
      template: './src/quiz/test1.html',
      filename: './quiz/test1.html',
      chunks: ['index', 'test', 'menu']
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
        priority: 'replace',
        chunks: ['menu']
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/banner-question.html'),
        location: 'bannerQuestion',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new SitemapPlugin({ base: 'https://hseadc.github.io.', paths })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
