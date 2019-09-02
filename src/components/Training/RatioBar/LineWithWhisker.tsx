import React from "react";
import { Line } from "react-konva";

export enum Direction {
  Horizontal,
  Vertical
}

export interface Props {
  x: number;
  y: number;
  length: number;
  whiskerSize: number;
  direction?: Direction;
  stroke?: string;
  strokeWidth?: number;
}

const LineWithWhisker: React.FC<Props> = ({
  x,
  y,
  length,
  direction,
  stroke,
  strokeWidth,
  whiskerSize
}) => {
  return (
    <>
      <Line
        points={
          direction === Direction.Horizontal
            ? [x, y - whiskerSize / 2, x, y + whiskerSize / 2]
            : [x - whiskerSize / 2, y, x + whiskerSize / 2, y]
        }
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <Line
        points={
          direction === Direction.Horizontal
            ? [x + length, y - whiskerSize / 2, x + length, y + whiskerSize / 2]
            : [x - whiskerSize / 2, y + length, x + whiskerSize / 2, y + length]
        }
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <Line
        points={
          direction === Direction.Horizontal
            ? [x, y, x + length, y]
            : [x, y, x, y + length]
        }
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </>
  );
};

export default LineWithWhisker;
