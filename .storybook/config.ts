import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { themes } from "@storybook/theming";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.tsx$/);

addParameters({
  options: {
    theme: themes.normal
  }
});

function loadStories() {
  addDecorator(withInfo);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
