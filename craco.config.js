const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
      "@katachi": path.resolve(__dirname, "./src")
    }
  },
  plugins: [{ plugin: require("craco-plugin-react-hot-reload") }]
};
