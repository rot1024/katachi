import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from "./VerticalLine";

storiesOf("VerticalLine2", module)
  .add("default", () => (
    <Component
      params={[0.5, 0.5, 0.5]}
      state={[1]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
    />
  ))
  .add("extream min", () => (
    <Component
      params={[0, 0, 0]}
      state={[0]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
    />
  ))
  .add("extream max", () => (
    <Component
      params={[1, 1, 1]}
      state={[1]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
    />
  ));
