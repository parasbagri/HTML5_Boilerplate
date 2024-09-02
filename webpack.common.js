// const path = require('path');

// module.exports = {
//   entry: {
//     app: './js/app.js',
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//     filename: './js/app.js',
//   },
// };


const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js', // Tumhara entry point
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, 
    filename: './js/app.js', // Output file ka naam
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js aur .jsx files ke liye
        exclude: /node_modules/, // node_modules folder ko exclude karta hai
        use: {
          loader: 'babel-loader', // Babel loader ka use karta hai
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // env aur react presets ko use karta hai
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Isse .jsx extensions ko bhi resolve karega
  },
};
