import React from "react";
import { KonvaEventObject } from "konva/types/Node";
import { Line, Layer } from "react-konva";

import {
  whiskerLength,
  strokeWith,
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
  ratio?: number[];
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
  const nextPoint = ratio
    ? ratio.length >= pointCount
      ? ratio.length === 1
        ? 0
        : null
      : ratio.length
    : 0;
  const handleMouseDownWhole = (e: KonvaEventObject<MouseEvent>) =>
    onMouseDown && nextPoint !== null ? onMouseDown(e, nextPoint) : undefined;
  const handleTouchStartWhole = (e: KonvaEventObject<TouchEvent>) =>
    onTouchStart && nextPoint !== null ? onTouchStart(e, nextPoint) : undefined;
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
        strokeWidth={strokeWith}
        whiskerSize={whiskerLength}
      />
      {ratio &&
        ratio.map((r, i) => (
          <Line
            key={i}
            points={[-whiskerLength / 2, y3(r), whiskerLength / 2, y3(r)]}
            strokeWidth={strokeWith}
            stroke="#000"
          />
        ))}
      {answerRatio &&
        answerRatio.map((a, i) => (
          <Line
            key={i}
            points={[-whiskerLength / 2, y3(a), whiskerLength / 2, y3(a)]}
            strokeWidth={strokeWith}
            stroke="#f00"
          />
        ))}
      <Line
        points={[0, -clickablePaddingH, 0, longerLength + clickablePaddingH]}
        strokeWidth={clickablePaddingW}
        onMouseDown={handleMouseDownWhole}
        onTouchStart={handleTouchStartWhole}
        stroke="transparent"
      />
      {ratio &&
        ratio.map((r, i) => (
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
        ))}
    </Layer>
  );
};

export default VerticalLineLayer;
