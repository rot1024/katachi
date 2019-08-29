import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("Timer", module).add("default", () => (
  <Component duration={10000} onTimeUp={action("timeUp")} enabled />
));
