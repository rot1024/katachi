import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("Menu", module).add("default", () => (
  <Component onSelect={action("select")} />
));
