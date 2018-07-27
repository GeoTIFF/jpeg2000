const path = require('path');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? 'jpeg2000.bundle.min.js' : 'jpeg2000.bundle.js',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    library: 'JPEG2000',
    libraryTarget: 'umd'    
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};