import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("ScaleCorrector", module).add("default", () => (
  <Component onEnter={action("enter")} />
));
