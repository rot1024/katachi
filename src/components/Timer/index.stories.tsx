import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component, { DisplayStyle } from ".";

storiesOf("Timer", module)
  .add("bar", () => (
    <Component duration={10000} onTimeUp={action("timeUp")} enabled />
  ))
  .add("text", () => (
    <Component
      duration={10000}
      onTimeUp={action("timeUp")}
      enabled
      displayStyle={DisplayStyle.Text}
    />
  ));
