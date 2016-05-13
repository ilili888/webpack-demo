var path = require('path')

module.exports = {
  entry: './entry.js',
  output: {
    // path: __dirname,
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.js$/, loader: 'babel' },
      { test: /\.svg$/, loader: 'svg-sprite', include: /assets\/icons/ },
    ]
  },
  // plugins: [
    // new webpack.BannerPlugin('This file is created by lili')
  // ],

  //  等同于.babelrc
  // babel: {
  //   presets: ['es2015'],
  //   plugins: ['transform-runtime'],
  // }

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "windows.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
  ],
  resolve: {
    alias: {
      'jquery': './node_modules/jquery/dist/jquery.js',
    }
  },
}
