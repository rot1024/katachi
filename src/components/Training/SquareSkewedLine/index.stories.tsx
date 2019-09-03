import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("Training/SquareSkewedLine", module)
  .add("default", () => (
    <Component
      params={[1, 0.8, 0.4]}
      screenSize={500}
      onUpdate={action("onUpdate")}
    />
  ))
  .add("with answer", () => (
    <Component
      params={[1, 0.8, 0.4]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
    />
  ));
