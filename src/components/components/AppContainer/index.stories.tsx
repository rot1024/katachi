import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component, { Mode } from ".";

storiesOf("AppContainer", module)
  .add("default", () => (
    <Component currentMode={Mode.Training} onModeChange={action("modeChange")}>
      content
    </Component>
  ))
  .add("hidden nav", () => (
    <Component
      currentMode={Mode.Training}
      navHidden
      onModeChange={action("modeChange")}
    >
      content
    </Component>
  ));
