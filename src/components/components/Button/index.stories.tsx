import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("Button", module).add("default", () => (
  <Component onClick={action("click")}>Next</Component>
));
