// webpack.config.js
module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: ['file-loader'],
      },
      // ... other rules
    ],
  }
  