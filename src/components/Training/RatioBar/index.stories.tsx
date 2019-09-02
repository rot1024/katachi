import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component, { Direction } from ".";

storiesOf("Training/RatioBar", module)
  .add("default", () => (
    <Component
      params={[0.5, 0.5, 0.5]}
      state={[1]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      pointCount={1}
      direction={Direction.Vertical}
    />
  ))
  .add("with answer", () => (
    <Component
      params={[0.5, 0.5, 0.5]}
      state={[1]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
      pointCount={1}
      direction={Direction.Vertical}
    />
  ))
  .add("with disableOperation", () => (
    <Component
      params={[0.5, 0.5, 0.5]}
      state={[1]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      disableOperation
      pointCount={1}
      direction={Direction.Vertical}
    />
  ))
  .add("extream min", () => (
    <Component
      params={[0, 0, 0]}
      state={[0]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
      pointCount={1}
      direction={Direction.Vertical}
    />
  ))
  .add("extream max", () => (
    <Component
      params={[1, 1, 1]}
      state={[1]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
      pointCount={1}
      direction={Direction.Vertical}
    />
  ))
  .add("2 points", () => (
    <Component
      params={[1, 0.8, 0.6, 0.4]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
      pointCount={2}
      direction={Direction.Vertical}
    />
  ))
  .add("1 point with horizontal", () => (
    <Component
      params={[0.8, 1, 0.6]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
      pointCount={1}
      direction={Direction.Horizontal}
    />
  ))
  .add("2 points with horizontal", () => (
    <Component
      params={[0.8, 1, 0.6, 0.4]}
      screenSize={500}
      onUpdate={action("onUpdate")}
      isAnswerShown
      pointCount={2}
      direction={Direction.Horizontal}
    />
  ));
