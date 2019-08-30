import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from "emotion-theming";
import { themes } from "@storybook/theming";
import { GlobalStyle, theme as appTheme } from "../src/style";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.tsx$/);

addParameters({
  options: {
    theme: themes.normal
  }
});

addDecorator(cb => (
  <ThemeProvider theme={appTheme}>
    <GlobalStyle />
    {cb()}
  </ThemeProvider>
));

function loadStories() {
  addDecorator(withInfo);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
