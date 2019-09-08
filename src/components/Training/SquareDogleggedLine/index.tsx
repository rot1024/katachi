import React, { useCallback, Fragment } from "react";
import { Stage, Layer, Rect, Line, Circle } from "react-konva";

import { strokeWidth, calcLength, margin, padding } from "./constants";
import { TrainingProps, useDrag, CalcStateFn } from "../common";
import { updateArray } from "@katachi/util";

const SquareDogleggedLine: React.FC<TrainingProps> = ({
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
    ({ x, y, dx, dy, index, isFirstTime, lastState, state }) =>
      index >= 2
        ? [
            state[0],
            state[1],
            (isFirstTime || !lastState[2]
              ? x - mainRectX
              : (lastState[2] as number) * rectSize + dx) / rectSize,
            (isFirstTime || !lastState[3]
              ? y - rectY
              : (lastState[3] as number) * rectSize + dy) / rectSize
          ]
        : updateArray(state, index, (x - mainRectX) / rectSize),
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
      <Stage width={screenSize} height={screenSize}>
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
            onMouseDown={e => dragStartCallback([e, 2])}
            onTouchStart={e => dragStartCallback([e, 2])}
          />
          <Line
            points={[
              rectX + rectSize * params[0],
              rectY,
              rectX + rectSize * params[2],
              rectY + rectSize * params[3],
              rectX + rectSize * params[1],
              rectY + rectSize
            ]}
            stroke="#000"
            strokeWidth={strokeWidth}
          />
          {!!state &&
            state.length === 4 &&
            state.every((s): s is number => typeof s === "number") && (
              <Line
                points={[
                  mainRectX + rectSize * (state[0] as number),
                  rectY,
                  mainRectX + rectSize * (state[2] as number),
                  rectY + rectSize * (state[3] as number),
                  mainRectX + rectSize * (state[1] as number),
                  rectY + rectSize
                ]}
                stroke="#000"
                strokeWidth={strokeWidth}
              />
            )}
          {!!state &&
            typeof state[2] === "number" &&
            typeof state[3] === "number" && (
              <Circle
                x={mainRectX + rectSize * (state[2] as number)}
                y={rectY + rectSize * (state[3] as number)}
                radius={4}
                fill="black"
              />
            )}
          {[0, 1].map(i => (
            <Fragment key={i}>
              {typeof state[i] === "number" && (
                <Circle
                  x={mainRectX + rectSize * (state[i] as number)}
                  y={i === 0 ? rectY : rectY + rectSize}
                  radius={4}
                  fill="black"
                />
              )}
              <Line
                points={[
                  mainRectX - padding,
                  i === 0 ? rectY : rectY + rectSize,
                  mainRectX + rectSize + padding,
                  i === 0 ? rectY : rectY + rectSize
                ]}
                strokeWidth={padding}
                stroke="transparent"
                onMouseDown={e => {
                  e.cancelBubble = true;
                  dragStartCallback([e, i]);
                }}
                onTouchStart={e => {
                  e.cancelBubble = true;
                  dragStartCallback([e, i]);
                }}
              />
            </Fragment>
          ))}
          {isAnswerShown && (
            <Line
              points={[
                mainRectX + rectSize * params[0],
                rectY,
                mainRectX + rectSize * params[2],
                rectY + rectSize * params[3],
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

export default SquareDogleggedLine;
