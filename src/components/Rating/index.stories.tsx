import React from "react";
import { storiesOf } from "@storybook/react";

import Component from ".";

storiesOf("Rating", module)
  .add("default", () => (
    <div>
      <Component score={1} />
      <Component score={0.9} />
      <Component score={0.7} />
      <Component score={0.6} />
    </div>
  ))
  .add("small", () => (
    <div>
      <Component small score={1} />
      <Component small score={0.9} />
      <Component small score={0.7} />
      <Component small score={0.6} />
    </div>
  ));
