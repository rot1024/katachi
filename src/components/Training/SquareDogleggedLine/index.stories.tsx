import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("Training/SquareDogleggedLine", module)
  .add("default", () => (
    <Component
      params={[0.8, 0.4, 0.7, 0.6]}
      screenSize={500}
      onUpdate={action("onUpdate")}
    />
  ))
  .add("with answer", () => (
    <Component
      params={[0.8, 0.4, 0.7, 0.6]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
    />
  ));
