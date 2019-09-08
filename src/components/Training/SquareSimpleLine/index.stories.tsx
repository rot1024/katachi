import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component, { Direction } from ".";

storiesOf("Training/SquareSimpleLine", module)
  .add("default", () => (
    <Component
      params={[1, 0.8]}
      state={[0]}
      screenSize={500}
      onUpdate={action("onUpdate")}
    />
  ))
  .add("with answer", () => (
    <Component
      params={[1, 0.8]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
    />
  ))
  .add("horizontal", () => (
    <Component
      params={[1, 0.8]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
      direction={Direction.Horizontal}
    />
  ));
