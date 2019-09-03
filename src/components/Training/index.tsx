import React from "react";

import { TrainingType } from "@katachi/lib";
import RatioBar, { Direction } from "./RatioBar";
import Square from "./Square";
import SquareVerticalLine from "./SquareVerticalLine";
import SquareSkewedLine from "./SquareSkewedLine";

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
        <RatioBar {...props} pointCount={1} direction={Direction.Vertical} />
      );
    case TrainingType.VerticalLine2:
      return (
        <RatioBar {...props} pointCount={2} direction={Direction.Vertical} />
      );
    case TrainingType.HorizontalLine1:
      return (
        <RatioBar {...props} pointCount={1} direction={Direction.Horizontal} />
      );
    case TrainingType.HorizontalLine2:
      return (
        <RatioBar {...props} pointCount={2} direction={Direction.Horizontal} />
      );
    case TrainingType.Square:
      return <Square {...props} />;
    case TrainingType.SquareVerticalLine:
      return <SquareVerticalLine {...props} />;
    case TrainingType.SquareSkewedLine:
      return <SquareSkewedLine {...props} />;
  }
  return null;
};

export default Training;
