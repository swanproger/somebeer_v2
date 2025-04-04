/* Development build:
  ========================================================================== */

const { merge } = require("webpack-merge");
const baseWebpackConfig = require("../../webpack.base.conf");
const webpack = require("webpack");

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    contentBase: "./dist",
    overlay: true,
    hot: true,
    port: 3001,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[filename.map]",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  watchOptions: {
    // for some systems, watching many files can result in a lot of CPU or memory usage
    // https://webpack.js.org/configuration/watch/#watchoptionsignored
    // ! don't use this pattern, if you have a monorepo with linked packages
    ignored: /node_modules/,
  },
});
