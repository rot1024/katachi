import React, { useCallback } from "react";
import { KonvaEventObject } from "konva/types/Node";
import { Stage, Line, Layer, Rect } from "react-konva";
import { fromEvent, merge } from "rxjs";
import {
  mergeMap,
  takeUntil,
  map,
  tap,
  withLatestFrom,
  filter,
  startWith
} from "rxjs/operators";
import { useEventCallback } from "rxjs-hooks";

import { clamp } from "@katachi/util";
import { TrainingProps } from "./common";

// training constants
const baseLength = 300;
const whiskerLength = 20;
const calcLength = (len: number, scaleCorrection: number) =>
  len * baseLength * scaleCorrection;
const calcAnotherLineLength = (ratio: number, lineLength: number) =>
  ratio * lineLength;

// style constants
const strokeWith = 3;
const clickablePadding = 30;

const VerticalLine: React.FC<TrainingProps> = ({
  className,
  params,
  state,
  isAnswerShown,
  screenSize,
  scaleCorrection = 1,
  disableOperation,
  onUpdate
}) => {
  const lineLength = calcLength(params[0], scaleCorrection);
  const anotherLineLength = calcAnotherLineLength(params[1], lineLength);
  const pointRatio = params[2];
  const statePointRatio = state ? state[0] : undefined;

  const calcStateFromY = useCallback(
    (y: number) =>
      clamp((y - (screenSize - lineLength) / 2) / lineLength, 0, 1),
    [lineLength, screenSize]
  );

  const [dragStartCallback, statePointRatio2] = useEventCallback<
    KonvaEventObject<MouseEvent>,
    number | undefined,
    [typeof onUpdate, typeof disableOperation, typeof calcStateFromY]
  >(
    (event$, inputs$, state$) =>
      event$.pipe(
        withLatestFrom(inputs$),
        filter(([, [, disableOperation]]) => !disableOperation),
        map(([e]) => [e.evt.y - e.evt.offsetY, e.evt.offsetY]),
        mergeMap(([e, firstY]) =>
          fromEvent<MouseEvent>(document, "mousemove").pipe(
            startWith(firstY),
            takeUntil(
              merge(
                fromEvent(document, "mouseup").pipe(
                  withLatestFrom(state$, inputs$),
                  tap(([, y, [onUpdate, disableOperation]]) => {
                    if (
                      typeof y === "number" &&
                      onUpdate &&
                      !disableOperation
                    ) {
                      onUpdate([y]);
                    }
                  })
                ),
                inputs$.pipe(
                  filter(([, disableOperation]) => !!disableOperation)
                )
              )
            ),
            map(e2 => (typeof e2 === "number" ? e2 : e2.y - e)),
            withLatestFrom(inputs$),
            map(([y, [, , calcStateFromY]]) => calcStateFromY(y))
          )
        )
      ),
    statePointRatio,
    [onUpdate, disableOperation, calcStateFromY]
  );

  if (lineLength === 0 || anotherLineLength === 0) return null;

  return (
    <Stage className={className} width={screenSize} height={screenSize}>
      <Layer>
        <Rect stroke="#eee" width={screenSize} height={screenSize} />
      </Layer>
      <Layer x={screenSize / 3} y={(screenSize - lineLength) / 2}>
        <Line
          points={[0, lineLength - anotherLineLength, 0, lineLength]}
          strokeWidth={strokeWith}
          stroke="#000"
        />
        <Line
          points={[
            -whiskerLength / 2,
            lineLength - anotherLineLength,
            +whiskerLength / 2,
            lineLength - anotherLineLength
          ]}
          strokeWidth={strokeWith}
          stroke="#000"
        />
        <Line
          points={[
            -whiskerLength / 2,
            lineLength,
            +whiskerLength / 2,
            lineLength
          ]}
          strokeWidth={strokeWith}
          stroke="#000"
        />
        <Line
          points={[
            -whiskerLength / 2,
            lineLength + anotherLineLength * (pointRatio - 1),
            whiskerLength / 2,
            lineLength + anotherLineLength * (pointRatio - 1)
          ]}
          strokeWidth={strokeWith}
          stroke="#000"
        />
      </Layer>
      <Layer x={(screenSize / 3) * 2} y={(screenSize - lineLength) / 2}>
        <Line
          points={[0, 0, 0, lineLength]}
          strokeWidth={strokeWith}
          stroke="#000"
        />
        <Line
          points={[-whiskerLength / 2, 0, +whiskerLength / 2, 0]}
          strokeWidth={3}
          stroke="#000"
        />
        <Line
          points={[
            -whiskerLength / 2,
            lineLength,
            +whiskerLength / 2,
            lineLength
          ]}
          strokeWidth={strokeWith}
          stroke="#000"
        />
        <Line
          points={[0, -clickablePadding, 0, lineLength + clickablePadding]}
          strokeWidth={clickablePadding}
          onMouseDown={dragStartCallback}
          stroke="transparent"
        />
        {typeof statePointRatio2 === "number" && (
          <Line
            points={[
              -whiskerLength / 2,
              lineLength * statePointRatio2,
              whiskerLength / 2,
              lineLength * statePointRatio2
            ]}
            strokeWidth={strokeWith}
            stroke="#000"
          />
        )}
        {isAnswerShown && (
          <Line
            points={[
              -whiskerLength / 2,
              lineLength * pointRatio,
              whiskerLength / 2,
              lineLength * pointRatio
            ]}
            strokeWidth={strokeWith}
            stroke="#f00"
          />
        )}
      </Layer>
    </Stage>
  );
};

export default VerticalLine;
