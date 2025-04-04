/* Production build:
  ========================================================================== */

const { merge } = require("webpack-merge");
const baseWebpackConfig = require("../../webpack.base.conf");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  devtool: false,
  output: {
    path: defines.dist,
  },
  plugins: [
    // compress example:
    // new CompressionPlugin({
    //   exclude: /\/static/,
    // }),
  ],
  module: {
    rules: [],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new JsonMinimizerPlugin(),
      new TerserPlugin(),
      new CssMinimizerPlugin({
        minimizerOptions: {
          // no ie please!
          // targets: { ie: 11 },
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
});
