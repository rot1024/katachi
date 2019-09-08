import React, { useCallback } from "react";
import { Stage, Layer, Rect, Line, Circle } from "react-konva";

import { strokeWidth, calcLength, margin, padding } from "./constants";
import { TrainingProps, useDrag } from "../common";
import { updateArray } from "@katachi/util";

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
  const rectSize = calcLength(scaleCorrection);
  const rectX = (screenSize - rectSize * 2 - margin) / 2;
  const rectY = (screenSize - rectSize) / 2;
  const mainRectX = rectX + margin + rectSize;

  const calcStateFromPos = useCallback(
    ({ x, index, state }) =>
      updateArray(state, index, (x - mainRectX) / rectSize),
    [rectSize, mainRectX]
  );

  const [dragStartCallback, state, wrapperRef] = useDrag<HTMLDivElement>({
    firstState,
    onUpdate,
    disableOperation,
    calcStateFromPos,
    params
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
              rectX + rectSize * params[0],
              rectY,
              rectX + rectSize * params[1],
              rectY + rectSize
            ]}
            stroke="#000"
            strokeWidth={strokeWidth}
          />
          {!!state &&
            state.length === 2 &&
            typeof state[0] === "number" &&
            typeof state[1] === "number" && (
              <Line
                points={[
                  mainRectX + rectSize * (state[0] as number),
                  rectY,
                  mainRectX + rectSize * (state[1] as number),
                  rectY + rectSize
                ]}
                stroke="#000"
                strokeWidth={strokeWidth}
              />
            )}
          {!!state &&
            state.map((s, i) =>
              typeof s === "number" ? (
                <Circle
                  key={i}
                  x={mainRectX + rectSize * s}
                  y={i === 1 ? rectY + rectSize : rectY}
                  radius={4}
                  fill="black"
                />
              ) : null
            )}
          {!!state &&
            state.map((s, i) => (
              <Line
                key={i}
                points={[
                  mainRectX - padding,
                  i === 0 ? rectY : rectY + rectSize,
                  mainRectX + rectSize + padding,
                  i === 0 ? rectY : rectY + rectSize
                ]}
                strokeWidth={padding}
                stroke="transparent"
                onMouseDown={e => dragStartCallback([e, i])}
                onTouchStart={e => dragStartCallback([e, i])}
              />
            ))}
          {isAnswerShown && (
            <Line
              points={[
                mainRectX + rectSize * params[0],
                rectY,
                mainRectX + rectSize * params[1],
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
