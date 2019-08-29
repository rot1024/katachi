import React from "react";
import { KonvaEventObject } from "konva/types/Node";
import { Line, Layer } from "react-konva";

import { whiskerLength, strokeWith, clickablePadding } from "./constants";

export interface Props {
  longerLength: number;
  lineLength: number;
  x: number;
  y: number;
  ratio?: number;
  answerRatio?: number;
  onMouseDown?: (e: KonvaEventObject<MouseEvent>) => void;
}

const VerticalLineLayer: React.FC<Props> = ({
  longerLength,
  lineLength,
  x,
  y,
  ratio,
  answerRatio,
  onMouseDown
}) =>
  longerLength === 0 || lineLength === 0 ? null : (
    <Layer x={x} y={y}>
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
      {typeof ratio === "number" && (
        <Line
          points={[
            -whiskerLength / 2,
            longerLength - lineLength * (1 - ratio),
            whiskerLength / 2,
            longerLength - lineLength * (1 - ratio)
          ]}
          strokeWidth={strokeWith}
          stroke="#000"
        />
      )}
      {answerRatio && (
        <Line
          points={[
            -whiskerLength / 2,
            longerLength - lineLength * (1 - answerRatio),
            whiskerLength / 2,
            longerLength - lineLength * (1 - answerRatio)
          ]}
          strokeWidth={strokeWith}
          stroke="#f00"
        />
      )}
      <Line
        points={[0, -clickablePadding, 0, longerLength + clickablePadding]}
        strokeWidth={clickablePadding}
        onMouseDown={onMouseDown}
        stroke="transparent"
      />
    </Layer>
  );

export default VerticalLineLayer;