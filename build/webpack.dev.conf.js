const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const md = require('markdown-it')();
const slugify = require('transliteration').slugify;
const striptags = require('./strip-tags');
const packagejson = require('../package.json');

md.use(require('markdown-it-anchor'),
  {
    level: 2,
    slugify: slugify,
    permalink: true,
    permalinkBefore: true
  })
  .use(require('markdown-it-container'), 'demo',
    {
      validate: function(params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },

      render: function(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        if (tokens[idx].nesting === 1) {
          var description = m[1]
          var content = tokens[idx + 1].content
          var html = striptags.strip(content, ['script', 'style'])
          var descriptionHTML = md.render(description)
          return `<demo-block>
                    <div slot="source">${html}</div>
                    ${descriptionHTML}
                    <div v-highlight slot="highlight">`
        } else {
          return `  </div>
                  </demo-block>\n`;
        }
      }
    })
  .use(require('markdown-it-container'), 'tip')
  .use(require('markdown-it-container'), 'warning');

const isDev = process.env.NODE_ENV === 'development';

module.exports = () => ({
  mode: isDev ? 'development' : 'production',
  entry: {
    'liu-UI': './examples/entry.js',
    vendor: Object.keys(packagejson.dependencies)
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name]-[hash:4].js',
    chunkFilename: '[name]-[hash:4].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.md$/,
        loader: 'ware-loader',
        enforce: 'pre',
        options: {
          raw: true,
          middleware: source => {
            const styleReg = /<(style)(?:[^>]*)?>([\s\S]*?)(?:<\/\1>[^\"\']|<\/\1>$)/i
            const scriptReg = /<(script)(?:[^>]*)?>([\s\S]*?)(?:<\/\1>[^\"\']|<\/\1>$)/i
            const styleStr = styleReg.exec(source)
            const scriptStr = scriptReg.exec(source)
            const templateStr = source.replace(styleReg, '').replace(scriptReg, '')
            return `
              ${styleStr}
              <template><div class="container">${md.render(templateStr)}</div></template>
              ${scriptStr}
            `;
          }
        }
      },
      {
        test: /\.md$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[hash:8].[ext]',
            limit: 10000
          }
        }]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    minimize: !isDev,
    concatenateModules: false, // 这是坑，此处先设置为false
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        },
        styles: {
          name: 'styles',
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
          test: /\.(styl|css|stylus)$/
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: isDev ? 'liu-UI (dev)' : 'liu-UI',
      template: './examples/index.tpl',
      filename: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new MiniCssPlugin({
      filename: '[name].[contenthash:4].css',
      chunkFilename: '[name].[contenthash:4].css'
    }),
    new OptimizeCSSPlugin({}),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['liu-UI运行在地址: http://localhost:8085']
      }
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: ['.js', '.vue', '.json', '.css']
  },
  devServer: {
    clientLogLevel: 'warning',
    host: 'localhost',
    port: 8085,
    hot: true,
    contentBase: false,
    compress: true,
    // open: true,
    quiet: true,
    overlay: {warnings: true, errors: true},
    watchOptions: {
      poll: true
    }
  },
  devtool: 'cheap-module-eval-source-map'
});
