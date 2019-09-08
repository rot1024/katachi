import React, { useCallback } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

import { strokeWidth, calcLength, margin } from "./constants";
import { TrainingProps, useDrag, CalcStateFn } from "../common";

const SquarePoint: React.FC<TrainingProps> = ({
  className,
  params,
  state: firstState,
  isAnswerShown,
  screenSize,
  scaleCorrection = 1,
  disableOperation,
  onUpdate
}) => {
  const rectSize = calcLength(scaleCorrection);
  const rectX = (screenSize - rectSize * 2 - margin) / 2;
  const rectY = (screenSize - rectSize) / 2;
  const mainRectX = rectX + margin + rectSize;

  const calcStateFromPos = useCallback<CalcStateFn>(
    ({ x, y, dx, dy, isFirstTime, lastState }) =>
      isFirstTime ||
      (typeof lastState[0] === "number" && typeof lastState[1] === "number")
        ? [
            (isFirstTime
              ? x - mainRectX
              : (lastState[0] as number) * rectSize + dx) / rectSize,
            (isFirstTime
              ? y - rectY
              : (lastState[1] as number) * rectSize + dy) / rectSize
          ]
        : [],
    [mainRectX, rectSize, rectY]
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
        onMouseDown={e => dragStartCallback([e, -1])}
        onTouchStart={e => dragStartCallback([e, -1])}
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
            y={rectY}
            width={rectSize}
            height={rectSize}
            strokeWidth={strokeWidth}
            stroke="#000"
          />
          <Circle
            x={rectX + rectSize * params[0]}
            y={rectY + rectSize * params[1]}
            fill="#000"
            radius={3}
          />
          {!!state &&
            state.length === 2 &&
            typeof state[0] === "number" &&
            typeof state[1] === "number" && (
              <Circle
                x={mainRectX + rectSize * (state[0] as number)}
                y={rectY + rectSize * (state[1] as number)}
                fill="#000"
                radius={3}
              />
            )}
          {isAnswerShown && (
            <Circle
              x={mainRectX + rectSize * params[0]}
              y={rectY + rectSize * params[1]}
              fill="#f00"
              radius={3}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default SquarePoint;
