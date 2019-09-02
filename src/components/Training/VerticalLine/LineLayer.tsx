import React from "react";
import { KonvaEventObject } from "konva/types/Node";
import { Line, Layer } from "react-konva";

import {
  whiskerLength,
  strokeWith,
  clickablePaddingW,
  clickablePaddingH
} from "./constants";

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

  return (
    <Layer x={x} y={y} rotation={direction === Direction.Horizontal ? -90 : 0}>
      <Line
        points={[0, longerLength - lineLength, 0, longerLength]}
        strokeWidth={strokeWith}
        stroke="#000"
      />
      <Line
        points={[
          -whiskerLength / 2,
          longerLength - lineLength,
          +whiskerLength / 2,
          longerLength - lineLength
        ]}
        strokeWidth={strokeWith}
        stroke="#000"
      />
      <Line
        points={[
          -whiskerLength / 2,
          longerLength,
          +whiskerLength / 2,
          longerLength
        ]}
        strokeWidth={strokeWith}
        stroke="#000"
      />
      {ratio &&
        ratio.map((r, i) => (
          <Line
            key={i}
            points={[
              -whiskerLength / 2,
              longerLength - lineLength * (1 - r),
              whiskerLength / 2,
              longerLength - lineLength * (1 - r)
            ]}
            strokeWidth={strokeWith}
            stroke="#000"
          />
        ))}
      {answerRatio &&
        answerRatio.map((a, i) => (
          <Line
            key={i}
            points={[
              -whiskerLength / 2,
              longerLength - lineLength * (1 - a),
              whiskerLength / 2,
              longerLength - lineLength * (1 - a)
            ]}
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
              longerLength - lineLength * (1 - r),
              clickablePaddingW / 2,
              longerLength - lineLength * (1 - r)
            ]}
            strokeWidth={clickablePaddingH}
            onMouseDown={handleMouseDown(i)}
            onTouchStart={handleTouchStart(i)}
            stroke="transparent"
          />
        ))}
      {answerRatio &&
        answerRatio.map((a, i) => (
          <Line
            key={i}
            points={[
              -clickablePaddingW / 2,
              longerLength - lineLength * (1 - a),
              clickablePaddingW / 2,
              longerLength - lineLength * (1 - a)
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
