import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("Training/Square", module)
  .add("default", () => (
    <Component
      params={[0.3, 0.8]}
      state={[0]}
      screenSize={500}
      onUpdate={action("onUpdate")}
    />
  ))
  .add("with answer", () => (
    <Component
      params={[0.3, 0.8]}
      state={[1]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
    />
  ));
