import React from "react";

import { TrainingType } from "@katachi/lib";
import RatioBar, { Direction } from "./RatioBar";
import Square from "./Square";
import SquareSimpleLine from "./SquareSimpleLine";
import SquareSkewedLine from "./SquareSkewedLine";
import SquarePoint from "./SquarePoint";
import SquareDogleggedLine from "./SquareDogleggedLine";

export { TrainingType };

export interface Props {
  className?: string;
  type: TrainingType;
  params: number[];
  state?: (number | undefined)[];
  isAnswerShown?: boolean;
  disableOperation?: boolean;
  screenSize: number;
  scaleCorrection?: number;
  onUpdate?: (state: (number | undefined)[]) => void;
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
      return <SquareSimpleLine {...props} direction={Direction.Vertical} />;
    case TrainingType.SquareHorizontalLine:
      return <SquareSimpleLine {...props} direction={Direction.Horizontal} />;
    case TrainingType.SquareSkewedLine:
      return <SquareSkewedLine {...props} />;
    case TrainingType.SquarePoint:
      return <SquarePoint {...props} />;
    case TrainingType.SquareDogleggedLine:
      return <SquareDogleggedLine {...props} />;
  }
  return null;
};

export default Training;
