import React, { useState, useEffect } from "react";

import { TrainingType } from "@katachi/training";
import { TrainingProps } from "./common";
import VerticalLine from "./VerticalLine";

export { TrainingType };

export interface Props {
  className?: string;
  type: TrainingType;
  params: number[];
  isAnswerShown?: boolean;
  screenSize: number;
  scaleCorrection?: number;
}

const getTrainingComponent = (
  t: TrainingType
): React.FC<TrainingProps> | undefined => {
  switch (t) {
    case TrainingType.VerticalLine2:
      return VerticalLine;
  }
  return undefined;
};

const Training: React.FC<Props> = props => {
  const [state, setState] = useState<number[] | undefined>();
  useEffect(() => setState(undefined), [props.params, props.type]);
  const Component = getTrainingComponent(props.type);
  if (Component) {
    return <Component {...props} state={state} onUpdate={s => setState(s)} />;
  }
  return null;
};

export default Training;
