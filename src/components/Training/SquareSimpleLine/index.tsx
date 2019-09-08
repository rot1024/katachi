import React, { useCallback } from "react";
import { Stage, Layer, Rect, Line } from "react-konva";

import { strokeWidth, calcLength, margin } from "./constants";
import { TrainingProps, useDrag, CalcStateFn } from "../common";
import { updateArray } from "@katachi/util";

export enum Direction {
  Vertical,
  Horizontal
}

export interface Props extends TrainingProps {
  direction?: Direction;
}

const SquareSimpleLine: React.FC<Props> = ({
  className,
  params,
  state: firstState,
  isAnswerShown,
  screenSize,
  scaleCorrection = 1,
  disableOperation,
  onUpdate,
  direction = Direction.Vertical
}) => {
  const rectSize = calcLength(params[0], scaleCorrection);
  const rectX =
    direction === Direction.Horizontal
      ? (screenSize - rectSize) / 2
      : (screenSize - rectSize * 2 - margin) / 2;
  const rectY =
    direction === Direction.Horizontal
      ? (screenSize - rectSize * 2 - margin) / 2
      : (screenSize - rectSize) / 2;
  const mainRectX =
    direction === Direction.Horizontal ? rectX : rectX + margin + rectSize;
  const mainRectY =
    direction === Direction.Horizontal ? rectY + margin + rectSize : rectY;

  const calcStateFromPos = useCallback<CalcStateFn>(
    ({ x, y, index, state }) =>
      updateArray(
        state,
        index,
        (direction === Direction.Horizontal ? y - mainRectY : x - mainRectX) /
          rectSize
      ),
    [direction, mainRectY, mainRectX, rectSize]
  );

  const [dragStartCallback, state, wrapperRef] = useDrag<HTMLDivElement>({
    firstState,
    onUpdate,
    disableOperation,
    calcStateFromPos,
    params
  });

  return (
    <div className={className} ref={wrapperRef}>
      <Stage
        width={screenSize}
        height={screenSize}
        onMouseDown={e => dragStartCallback([e, 0])}
        onTouchStart={e => dragStartCallback([e, 0])}
      >
        <Layer>
          <Rect stroke="#eee" width={screenSize} height={screenSize} />
          <Rect
            x={rectX}
            y={rectY}
            width={rectSize}
            height={rectSize}
            strokeWidth={strokeWidth}
            stroke="#000"
          />
          <Rect
            x={mainRectX}
            y={mainRectY}
            width={rectSize}
            height={rectSize}
            strokeWidth={strokeWidth}
            stroke="#000"
          />
          <Line
            points={[
              direction === Direction.Horizontal
                ? rectX
                : rectX + rectSize * params[1],
              direction === Direction.Horizontal
                ? rectY + rectSize * params[1]
                : rectY,
              direction === Direction.Horizontal
                ? rectX + rectSize
                : rectX + rectSize * params[1],
              direction === Direction.Horizontal
                ? rectY + rectSize * params[1]
                : rectY + rectSize
            ]}
            stroke="#000"
            strokeWidth={strokeWidth}
          />
          {!!state && typeof state[0] === "number" && (
            <Line
              points={[
                direction === Direction.Horizontal
                  ? mainRectX
                  : mainRectX + rectSize * state[0],
                direction === Direction.Horizontal
                  ? mainRectY + rectSize * state[0]
                  : mainRectY,
                direction === Direction.Horizontal
                  ? mainRectX + rectSize
                  : mainRectX + rectSize * state[0],
                direction === Direction.Horizontal
                  ? mainRectY + rectSize * state[0]
                  : mainRectY + rectSize
              ]}
              stroke="#000"
              strokeWidth={strokeWidth}
            />
          )}
          {isAnswerShown && (
            <Line
              points={[
                direction === Direction.Horizontal
                  ? mainRectX
                  : mainRectX + rectSize * params[1],
                direction === Direction.Horizontal
                  ? mainRectY + rectSize * params[1]
                  : mainRectY,
                direction === Direction.Horizontal
                  ? mainRectX + rectSize
                  : mainRectX + rectSize * params[1],
                direction === Direction.Horizontal
                  ? mainRectY + rectSize * params[1]
                  : mainRectY + rectSize
              ]}
              stroke="#f00"
              strokeWidth={strokeWidth}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default SquareSimpleLine;
