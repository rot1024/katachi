import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Component, { TrainingType } from ".";

storiesOf("Training", module).add("Vertical Line", () => (
  <Component
    type={TrainingType.VerticalLine2}
    params={[0.5, 0.5, 0.5]}
    screenSize={500}
    isAnswerShown
  />
));
