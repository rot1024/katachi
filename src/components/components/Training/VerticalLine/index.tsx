import React, { useCallback } from "react";
import { KonvaEventObject } from "konva/types/Node";
import { Stage, Layer, Rect } from "react-konva";
import { fromEvent, merge } from "rxjs";
import {
  mergeMap,
  takeUntil,
  map,
  tap,
  withLatestFrom,
  filter,
  startWith,
  distinctUntilChanged,
  mapTo,
  skip
} from "rxjs/operators";
import { useEventCallback } from "rxjs-hooks";

import { clamp, numberArrayEqual } from "@katachi/util";
import { TrainingProps } from "../common";

import { calcLength } from "./constants";
import VerticalLineLayer from "./VerticalLineLayer";

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
  const line2Length = calcLength(params[1], scaleCorrection);
  const longerLength = Math.max(lineLength, line2Length);
  const pointRatio = params[2];
  const statePointRatio = state ? state[0] : undefined;

  const calcStateFromY = useCallback(
    (y: number) =>
      clamp(
        (y - ((screenSize - longerLength) / 2 + (longerLength - lineLength))) /
          lineLength,
        0,
        1
      ),
    [lineLength, longerLength, screenSize]
  );

  type DragStartInputs = [
    typeof onUpdate,
    typeof disableOperation,
    typeof calcStateFromY,
    typeof params
  ];
  const dragStartInputs: DragStartInputs = [
    onUpdate,
    disableOperation,
    calcStateFromY,
    params
  ];
  const [dragStartCallback, statePointRatio2] = useEventCallback<
    KonvaEventObject<MouseEvent>,
    number | undefined,
    DragStartInputs
  >(
    (event$, inputs$, state$) =>
      merge(
        inputs$.pipe(
          map(([, , , p]) => p),
          distinctUntilChanged(numberArrayEqual),
          mapTo(undefined)
        ),
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
                    skip(1),
                    map(([, disableOperation]) => disableOperation),
                    distinctUntilChanged(),
                    filter(d => !!d)
                  ),
                  inputs$.pipe(
                    skip(1),
                    map(([, , , params]) => params),
                    distinctUntilChanged(numberArrayEqual)
                  )
                )
              ),
              map(e2 => (typeof e2 === "number" ? e2 : e2.y - e)),
              withLatestFrom(inputs$),
              map(([y, [, , calcStateFromY]]) => calcStateFromY(y))
            )
          )
        )
      ),
    statePointRatio,
    dragStartInputs
  );

  return (
    <Stage className={className} width={screenSize} height={screenSize}>
      <Layer>
        <Rect stroke="#eee" width={screenSize} height={screenSize} />
      </Layer>
      <VerticalLineLayer
        x={screenSize / 3}
        y={(screenSize - longerLength) / 2}
        lineLength={line2Length}
        longerLength={longerLength}
        ratio={pointRatio}
      />
      <VerticalLineLayer
        x={(screenSize / 3) * 2}
        y={(screenSize - longerLength) / 2}
        lineLength={lineLength}
        longerLength={longerLength}
        ratio={statePointRatio2 ? statePointRatio2 : undefined}
        answerRatio={isAnswerShown ? pointRatio : undefined}
        onMouseDown={dragStartCallback}
      />
    </Stage>
  );
};

export default VerticalLine;
