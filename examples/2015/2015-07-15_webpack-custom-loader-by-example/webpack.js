var webpack = require('webpack');
var path = require('path');

var out = path.resolve(__dirname);
console.log(out);
var root_dir = path.resolve(__dirname);

var entry = ['webpack/hot/poll?1000','./entry.js'];

var cfg = {
  context: root_dir,
  resolve: {
    extensions: ['', '.js']
  },
  entry: entry,
  output: {
    path: out,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },
  recordsPath: path.resolve(__dirname, 'webpack.records.json'),
  module: {
    // devtool: 'source-map',
    preLoaders: [
      {test: /\.js$/, loader: "./test-loader", exclude: /node_module/}
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
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

//module.exports = cfg;

// http://webpack.github.io/docs/node.js-api.html
var compiler = webpack(cfg);

compiler.run(function(err, stats) {
    // ...
});

compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    // ...
});


