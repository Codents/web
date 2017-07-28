const webpack = require('webpack');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ifs = require('os').networkInterfaces();
const Conf = require('../.appconf.json');

const rootPath = path.resolve(__dirname, '../');
const jsSourcePath = path.join(__dirname, '../app/web');
const imgPath = path.join(__dirname, '../app/web/assets/img');
const moviesPath = path.join(__dirname, '../app/web/assets/mov');
const fontsPath = path.join(__dirname, '../app/web/assets/fonts');
const buildPath = path.join(__dirname, '../build/web');
const sourcePath = path.join(__dirname, '../app');
Conf.ENV.loc = Object.keys(ifs)
  .map(x => ifs[x].filter(y => y.family === 'IPv4' && !y.internal)[0])
  .filter(z => z)[0].address;

function normalizeEnvVars(env_vars) {
  console.log('ENVIRONMENT VARS %s', JSON.stringify(env_vars));
  for (const key in env_vars) {
    env_vars[key] = env_vars[key].replace(/'|"/gi, '');
  }
  console.log('NORMALIZED ENVIRONMENT VARS %s', JSON.stringify(env_vars));
}

module.exports = env => {
  normalizeEnvVars(env);
  const isProduction = env.target === 'prod';
  console.log(
    `Compiling for ${ env.target === 'dev'
      ? JSON.stringify('development')
      : JSON.stringify('production') }`
  );
  let REST_API;

  switch (env.env) {
    case 'loc':
      REST_API = `'http://${ Conf.ENV.loc }:${ Conf.HTTP_RESTFUL_PORT }'`;
      break;
    case 'dev':
      REST_API = `'http://${ Conf.ENV.dev }:${ Conf.HTTP_RESTFUL_PORT }'`;
      break;
    case 'prod':
      REST_API = `'http://${ Conf.ENV.prod }:${ Conf.HTTP_RESTFUL_PORT }'`;
      break;
  }

  // Common plugins
  const plugins = [
    new CleanWebpackPlugin([path.join(buildPath, '*.*')], { root: rootPath, verbose: true, dry: false }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].js',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(jsSourcePath, 'index.html'),
      path: buildPath,
      filename: 'index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 3 version', 'ie >= 10'],
          }),
        ],
        context: sourcePath,
      },
    }),
    new webpack.DefinePlugin({
      TARGET: JSON.stringify(env.target),
      PLATFORM: JSON.stringify(env.platform),
      VERSION: JSON.stringify(env.version),
      REST_API,
      LANGUAJE: JSON.stringify(env.languaje),
      'process.env': {
        NODE_ENV:
          env.target === 'dev' ? JSON.stringify('development') : JSON.stringify('production'),
      },
    }),
  ];

  // Common rules
  const rules = [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(png|gif|jpg|svg)$/,
      // include: imgPath,
      use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
    },
    {
      test: /.*\.(woff|woff2|eot|ttf)$/i,
      // include: fontsPath,
      use: 'file-loader?hash=sha512&digest=hex&name=./assets/[hash].[ext]',
    },
    {
      test: /.*\.(webm|mp4|ogv)$/i,
      // include: moviesPath,
      use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
    },
  ];

  let entries = [];
  if (isProduction) {
    entries = ['app.js'];
    // Production plugins
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
      }),
      new ExtractTextPlugin('style-[hash].css')
    );

    // Production rules
    rules.push({
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader?sourceMap'],
    });
  } else {
    entries = [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'app.js',
    ];
    // Development plugins
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new DashboardPlugin()
    );

    // Development rules
    rules.push({
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader?sourceMap'],
    });
  }

  const webPackConf = {
    devtool: isProduction ? false : 'source-map',
    context: jsSourcePath,
    entry: entries,
    output: {
      path: buildPath,
      publicPath: isProduction ? './' : '/',
      filename: 'app.js',
    },
    module: {
      rules,
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: ['node_modules', jsSourcePath],
    },
    plugins,
    devServer: {
      contentBase: isProduction ? '../build' : '../app',
      historyApiFallback: true,
      port: 3000,
      compress: isProduction,
      inline: !isProduction,
      host: '0.0.0.0',
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        },
      },
    },
  };

  return webPackConf;
};
