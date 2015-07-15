var webpack = require('webpack');

var entry = ["./entry.js"];

var cfg = {
  entry: entry,
  output: {
    path: __dirname,
    filename: "bundle.js",
    libraryTarget: 'commonjs2',
    publicPath: './'
  },
  module: {
    /*preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],*/
    devtool: 'source-map',
    loaders: [
      {test: /\.js$/, loader: "./test-loader"}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: /^[a-z][a-z\.\-0-9]*$/,
  target: 'node',
   node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true
      }
};

// http://webpack.github.io/docs/node.js-api.html
webpack(cfg, function() {});