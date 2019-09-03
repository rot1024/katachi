import React, { useCallback } from "react";
import { Stage, Layer, Rect, Line } from "react-konva";

import {
  strokeWidth,
  calcLength,
  calcRectX,
  calcAnswer,
  calcRectY
} from "./constants";
import { TrainingProps, useDrag } from "../common";

const Square: React.FC<TrainingProps> = ({
  className,
  params,
  state: firstState,
  isAnswerShown,
  screenSize,
  scaleCorrection = 1,
  disableOperation,
  onUpdate
}) => {
  const rectW = calcLength(params[0], scaleCorrection);
  const rectH = calcLength(params[1], scaleCorrection);
  const rectX = calcRectX(rectW, screenSize);
  const rectY = calcRectY(rectH, screenSize);
  const answerY = calcAnswer(rectW, rectH, screenSize);

  const calcStateFromPos = useCallback(y => (y - rectY) / rectH, [
    rectH,
    rectY
  ]);

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
            width={rectW}
            height={rectH}
            strokeWidth={strokeWidth}
            stroke="#000"
          />
          {!!state && !!state[0] && (
            <Line
              points={[
                rectX,
                rectY + rectH * state[0],
                rectX + rectW,
                rectY + rectH * state[0]
              ]}
              stroke="#000"
              strokeWidth={strokeWidth}
            />
          )}
          {isAnswerShown && (
            <Line
              points={[rectX, answerY, rectX + rectW, answerY]}
              stroke="#f00"
              strokeWidth={strokeWidth}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default Square;
