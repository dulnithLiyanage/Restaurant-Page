const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    navbar: "./src/navbar.js",
    home: "./src/home.js",
    menu: "./src/menu.js",
    contact: "./src/contact.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "none",
};
