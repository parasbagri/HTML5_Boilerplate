const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point is index.js inside src folder
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder for bundled files
    filename: "bundle.js", // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply Babel loader for .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Apply CSS loader for .css files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // File loader for images
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve .js and .jsx extensions
  },
  devServer: {
    static: path.join(__dirname, "dist"), // Serve files from the dist directory
    compress: true,
    port: 9000, // Development server port
  },
  mode: "development", // Development mode
};
