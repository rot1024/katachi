import React from "react";
import { storiesOf } from "@storybook/react";

import Component from ".";
import { TrainingType } from "../Training";

storiesOf("History", module).add("default", () => (
  <Component
    histories={[
      {
        type: TrainingType.VerticalLine1,
        params: [[0.1, 0.5, 0.9], [0.1, 0.5, 0.9], [0.1, 0.5, 0.9]],
        scores: [0.9, 0.8, 0.7],
        datetime: new Date(),
        state: [[0.1], [0.2], [0.3]]
      },
      {
        type: TrainingType.VerticalLine1,
        params: [[0.1, 0.5, 0.9], [0.1, 0.5, 0.9], [0.1, 0.5, 0.9]],
        scores: [0.9, 0.8, 0.7],
        datetime: new Date(),
        state: [[0.1], [0.2], [0.3]]
      }
    ]}
  />
));
