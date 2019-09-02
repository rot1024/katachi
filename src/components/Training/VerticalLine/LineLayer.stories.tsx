import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component, { Direction } from "./LineLayer";
import { Stage } from "react-konva";

storiesOf("VerticalLine/LineLayer", module)
  .add("1 point", () => (
    <Stage width={500} height={500}>
      <Component
        x={250}
        y={50}
        ratio={[0.7]}
        answerRatio={[0.3]}
        direction={Direction.Vertical}
        lineLength={300}
        longerLength={400}
        pointCount={1}
        onMouseDown={action("mouseDown")}
        onTouchStart={action("touchStart")}
      />
    </Stage>
  ))
  .add("2 point", () => (
    <Stage width={500} height={500}>
      <Component
        x={250}
        y={50}
        ratio={[0.7, 0.4]}
        answerRatio={[0.6, 0.3]}
        direction={Direction.Vertical}
        lineLength={300}
        longerLength={400}
        pointCount={2}
        onMouseDown={action("mouseDown")}
        onTouchStart={action("touchStart")}
      />
    </Stage>
  ))
  .add("horizontal", () => (
    <Stage width={500} height={500}>
      <Component
        x={50}
        y={250}
        ratio={[0.7]}
        answerRatio={[0.3]}
        direction={Direction.Horizontal}
        lineLength={300}
        longerLength={400}
        pointCount={1}
        onMouseDown={action("mouseDown")}
        onTouchStart={action("touchStart")}
      />
    </Stage>
  ));
