import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Component, { Mode } from ".";

storiesOf("Nav", module)
  .add("default", () => <Component onSelect={action("select")} />)
  .add("training selected", () => (
    <Component onSelect={action("select")} selected={Mode.Training} />
  ))
  .add("report selected", () => (
    <Component onSelect={action("select")} selected={Mode.Report} />
  ))
  .add("setting selected", () => (
    <Component onSelect={action("select")} selected={Mode.Setting} />
  ));
