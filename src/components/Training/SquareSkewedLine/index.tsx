import React, { useCallback } from "react";
import { Stage, Layer, Rect, Line, Circle } from "react-konva";

import { strokeWidth, calcLength, margin } from "./constants";
import { TrainingProps, useDrag } from "../common";

const SquareVerticalLine: React.FC<TrainingProps> = ({
  className,
  params,
  state: firstState,
  isAnswerShown,
  screenSize,
  scaleCorrection = 1,
  disableOperation,
  onUpdate
}) => {
  const rectSize = calcLength(params[0], scaleCorrection);
  const rectX = (screenSize - rectSize * 2 - margin) / 2;
  const rectY = (screenSize - rectSize) / 2;
  const mainRectX = rectX + margin + rectSize;

  const calcStateFromPos = useCallback(y => (y - mainRectX) / rectSize, [
    rectSize,
    mainRectX
  ]);

  const [dragStartCallback, state, wrapperRef] = useDrag<HTMLDivElement>({
    firstState,
    onUpdate,
    disableOperation,
    calcStateFromPos,
    params,
    useX: true
  });

  const nextPoint = state ? (state.length === 2 ? null : state.length) : 0;

  return (
    <div className={className} ref={wrapperRef}>
      <Stage
        width={screenSize}
        height={screenSize}
        onMouseDown={
          nextPoint !== null
            ? e => dragStartCallback([e, nextPoint])
            : undefined
        }
        onTouchStart={
          nextPoint !== null
            ? e => dragStartCallback([e, nextPoint])
            : undefined
        }
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
          <Line
            points={[
              rectX + rectSize * params[1],
              rectY,
              rectX + rectSize * params[2],
              rectY + rectSize
            ]}
            stroke="#000"
            strokeWidth={strokeWidth}
          />
          {!!state && state.length === 2 && (
            <Line
              points={[
                mainRectX + rectSize * state[0],
                rectY,
                mainRectX + rectSize * state[1],
                rectY + rectSize
              ]}
              stroke="#000"
              strokeWidth={strokeWidth}
            />
          )}
          {!!state &&
            state.map((s, i) => (
              <Circle
                key={i}
                x={mainRectX + rectSize * s}
                y={i === 1 ? rectY + rectSize : rectY}
                radius={4}
                fill="black"
              />
            ))}
          {!!state &&
            state.map((s, i) => (
              <Circle
                key={i}
                x={mainRectX + rectSize * s}
                y={i === 1 ? rectY + rectSize : rectY}
                radius={20}
                fill="transparent"
                onMouseDown={e => dragStartCallback([e, i])}
                onTouchStart={e => dragStartCallback([e, i])}
              />
            ))}
          {isAnswerShown && (
            <Line
              points={[
                mainRectX + rectSize * params[1],
                rectY,
                mainRectX + rectSize * params[2],
                rectY + rectSize
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

export default SquareVerticalLine;
