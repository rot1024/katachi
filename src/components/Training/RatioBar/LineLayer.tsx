import React from "react";
import { KonvaEventObject } from "konva/types/Node";
import { Line, Layer } from "react-konva";

import {
  whiskerLength,
  strokeWidth,
  clickablePaddingW,
  clickablePaddingH
} from "./constants";
import LineWithWhisker from "./LineWithWhisker";

export enum Direction {
  Vertical,
  Horizontal
}

export interface Props {
  longerLength: number;
  lineLength: number;
  x: number;
  y: number;
  ratio?: (number | undefined)[];
  answerRatio?: number[];
  onMouseDown?: (e: KonvaEventObject<MouseEvent>, i: number) => void;
  onTouchStart?: (e: KonvaEventObject<TouchEvent>, i: number) => void;
  direction: Direction;
  pointCount: number;
}

const VerticalLineLayer: React.FC<Props> = ({
  longerLength,
  lineLength,
  x,
  y,
  ratio,
  answerRatio,
  onMouseDown,
  onTouchStart,
  direction,
  pointCount
}) => {
  if (longerLength === 0 || lineLength === 0) {
    return null;
  }
  const handleMouseDown = (i: number) =>
    onMouseDown
      ? (e: KonvaEventObject<MouseEvent>) => onMouseDown(e, i)
      : undefined;
  const handleTouchStart = (i: number) =>
    onTouchStart
      ? (e: KonvaEventObject<TouchEvent>) => onTouchStart(e, i)
      : undefined;
  const y2 = direction === Direction.Horizontal ? 0 : longerLength - lineLength;
  const y3 = (r: number) =>
    direction === Direction.Horizontal
      ? lineLength * r
      : longerLength - lineLength * (1 - r);

  return (
    <Layer x={x} y={y} rotation={direction === Direction.Horizontal ? -90 : 0}>
      <LineWithWhisker
        x={0}
        y={y2}
        length={lineLength}
        stroke="#000"
        strokeWidth={strokeWidth}
        whiskerSize={whiskerLength}
      />
      {ratio &&
        ratio.map((r, i) =>
          typeof r === "number" ? (
            <Line
              key={i}
              points={[-whiskerLength / 2, y3(r), whiskerLength / 2, y3(r)]}
              strokeWidth={strokeWidth}
              stroke="#000"
            />
          ) : null
        )}
      {answerRatio &&
        answerRatio.map((a, i) => (
          <Line
            key={i}
            points={[-whiskerLength / 2, y3(a), whiskerLength / 2, y3(a)]}
            strokeWidth={strokeWidth}
            stroke="#f00"
          />
        ))}
      {ratio &&
        ratio.map((r, i) =>
          typeof r === "number" ? (
            <Line
              key={i}
              points={[
                -clickablePaddingW / 2,
                y3(r),
                clickablePaddingW / 2,
                y3(r)
              ]}
              strokeWidth={clickablePaddingH}
              onMouseDown={handleMouseDown(i)}
              onTouchStart={handleTouchStart(i)}
              stroke="transparent"
            />
          ) : null
        )}
    </Layer>
  );
};

export default VerticalLineLayer;
