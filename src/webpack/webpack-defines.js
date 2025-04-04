const path = require("path");

const dirs = {
  src: path.join(__dirname, "../src"),

  dist: path.join(__dirname, "../dist"),

  assets: "assets/",
};

module.exports = {
  ...dirs,
};
