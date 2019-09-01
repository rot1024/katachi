import React from "react";

import { TrainingType } from "@katachi/lib";
import { TrainingProps } from "./common";
import VerticalLine from "./VerticalLine";

export { TrainingType };

export interface Props {
  className?: string;
  type: TrainingType;
  params: number[];
  state?: number[];
  isAnswerShown?: boolean;
  disableOperation?: boolean;
  screenSize: number;
  scaleCorrection?: number;
  onUpdate?: (state: number[]) => void;
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
  const Component = getTrainingComponent(props.type);
  if (!Component) return null;
  return <Component {...props} />;
};

export default Training;
