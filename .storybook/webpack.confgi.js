module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-react-app"]
        }
      },
      "react-docgen-typescript-loader"
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
