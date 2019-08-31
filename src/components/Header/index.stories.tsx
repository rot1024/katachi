import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("Header", module)
  .add("default", () => <Component />)
  .add("closable", () => <Component closable onClose={action("close")} />);
