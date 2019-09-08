import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("Training/SquarePoint", module)
  .add("default", () => (
    <Component
      params={[0.8, 0.4]}
      state={[0]}
      screenSize={500}
      onUpdate={action("onUpdate")}
    />
  ))
  .add("with answer", () => (
    <Component
      params={[0.8, 0.4]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
    />
  ));
