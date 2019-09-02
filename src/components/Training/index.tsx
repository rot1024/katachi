import React from "react";

import { TrainingType } from "@katachi/lib";
import RatiolBar, { Direction } from "./RatioBar";

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

const Training: React.FC<Props> = props => {
  switch (props.type) {
    case TrainingType.VerticalLine1:
      return (
        <RatiolBar {...props} pointCount={1} direction={Direction.Vertical} />
      );
    case TrainingType.VerticalLine2:
      return (
        <RatiolBar {...props} pointCount={2} direction={Direction.Vertical} />
      );
  }
  return null;
};

export default Training;
