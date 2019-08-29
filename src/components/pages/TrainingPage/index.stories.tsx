import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component, { TrainingType } from ".";

storiesOf("TrainingPage", module).add("default", () => (
  <Component type={TrainingType.VerticalLine2} onFinish={action("finish")} />
));
