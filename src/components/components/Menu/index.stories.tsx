import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component from ".";

storiesOf("Menu", module).add("default", () => (
  <Component
    items={[
      { id: "a", label: "AAAA" },
      { id: "b", label: "BBBB", icon: "sliders-h", iconColor: "orange" },
      { id: "c", label: "CCCC" }
    ]}
    onSelect={action("select")}
  />
));
