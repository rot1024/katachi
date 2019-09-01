import React from "react";
import { storiesOf } from "@storybook/react";

import Component from ".";
import { TrainingType } from "../Training";

storiesOf("History", module).add("default", () => (
  <Component
    histories={[
      {
        type: TrainingType.VerticalLine2,
        params: [[0.1, 0.5, 0.9], [0.1, 0.5, 0.9], [0.1, 0.5, 0.9]],
        scores: [0.9, 0.8, 0.7],
        datetime: new Date()
      },
      {
        type: TrainingType.VerticalLine2,
        params: [[0.1, 0.5, 0.9], [0.1, 0.5, 0.9], [0.1, 0.5, 0.9]],
        scores: [0.9, 0.8, 0.7],
        datetime: new Date()
      }
    ]}
  />
));