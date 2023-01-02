module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    first: './src/index.js',
    second: './src/daily.js',
    third: './src/hourly.js',
    fourth: './src/weather.js',
    fifth: './src/togle.js',
    sixth: './src/date.js',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'assert/resource',
    },
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },

    ],
  },
};
