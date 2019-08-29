import React from "react";
import { storiesOf } from "@storybook/react";

import Component, { TrainingType } from ".";

storiesOf("TrainingResult", module).add("default", () => (
  <Component
    type={TrainingType.VerticalLine2}
    scores={[0, 0.1, 0.5, 0.6, 0.9, 1]}
  />
));
