import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component, { TrainingType, Level } from ".";

storiesOf("TrainingPage", module).add("default", () => (
  <Component
    type={TrainingType.VerticalLine1}
    level={Level.Normal}
    onFinish={action("finish")}
  />
));
