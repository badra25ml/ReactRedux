/*jshint esversion: 6 */
module.exports = {
  // entry: {
  //   app: './src/index.js'
  // },
  // output: {
  //   // path: __dirname,
  //   // publicPath: '/',
  //   filename: 'bundle.js'
  // },

  entry: {
      app: './src/index.js'
    },
    output: {
      filename: 'bundle.js',
      path: __dirname,
      publicPath: '/'
    },
  module: {
      rules: [{
      test: /\.js$/,
      loaders: [{
      // exclude: /node_modules/,
      loader: 'jshint-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
   }]

  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};



// module.exports = {
//   entry: {
//     app: './src/index.js'
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//
//   module: {
//     rules: [{
//       test: /\.js$/, // include .js files
//       enforce: "pre", // preload the jshint loader
//       exclude: /node_modules/, // exclude any and all files in the node_modules folder
//       use: [{
//         loader: "jshint-loader",
//
//         // more options in the optional jshint object
//         options: {  // ⬅ formally jshint property
//           camelcase: true,
//           emitErrors: false,
//           failOnHint: false
//         }
//       }]
//     }]
//   },
// };
