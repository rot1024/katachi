import React, { useState, useEffect } from "react";

import { TrainingProps } from "./common";
import VerticalLine from "./VerticalLine";

export enum TrainingType {
  VerticalLine2 = "verticalLine2"
  // VerticalLine3 = "verticalLine3",
  // HorizontalLine2 = "horizontailLine2",
  // HorizontalLine3 = "horizontalLine3",
  // Square = "square",
  // SquareVerticalLine = "squareVerticalLine",
  // SquareSkewedLine = "squareSkewedLine",
  // SquareDogleggedLine = "squareDogleggedLine",
  // SquareTriangle = "squareTriangle",
  // SquarePoint = "squarePoint",
  // Ellipse = "ellipse",
  // EllipseMultiple = "ellipseMultiple"
}

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
