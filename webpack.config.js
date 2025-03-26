const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    clean: true,
  },
  devServer: {
    overlay: true,
  },
  resolve: {
    extensions: [".ts", ".js", "jsx", "tsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpg)$/i,
        type: "asset",
      },
    ],
  },
  mode: "development",
};
