/* Base config:
  ========================================================================== */

//

const path = require("path");
const defines = require("../../webpack-defines");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { webpack } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.ts",
    path: defines.dist,
    publicPath: "/dist",
    clean: true,
  },

  resolve: {
    extensions: [".ts", ".js", "jsx", "tsx", "*"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Somebeer",
      template: `${defines.src}/index.html`,
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyWebpackPlugin([
      {
        from: `${defines.src}/assets/images`,
        to: `${defines.dist}/assets/images`,
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.bundle\.ts$/,
        use: "bundle-loader",
      },
      {
        test: /\.(ts|js)x?$/,
        use: [
          "ts-loader",
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { SourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `${defines.src}/postcss.config.js` },
            },
          },
          { loader: "sass-loader", options: { SourceMap: true } },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `${defines.src}/postcss.config.js` },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpg)$/i,
        type: "asset",
        use: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  mode: "development",
};
