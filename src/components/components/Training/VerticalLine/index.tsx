import React, { useCallback, useRef } from "react";
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
  const wrapperRef = useRef<HTMLDivElement>(null);
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
    KonvaEventObject<MouseEvent | TouchEvent>,
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
          map(([e]) => [
            e.evt instanceof TouchEvent
              ? e.evt.targetTouches[0].pageY
              : e.evt.pageY,
            wrapperRef.current
              ? wrapperRef.current.getBoundingClientRect().top
              : 0
          ]),
          map(([pageY, offsetY]) => [pageY - offsetY, offsetY] as const),
          mergeMap(([firstY, offsetY]) =>
            merge(
              fromEvent<MouseEvent>(document, "mousemove"),
              fromEvent<TouchEvent>(document, "touchmove")
            ).pipe(
              map(
                e2 =>
                  (e2 instanceof TouchEvent
                    ? e2.targetTouches[0].pageY
                    : e2.pageY) - offsetY
              ),
              startWith(firstY),
              takeUntil(
                merge(
                  merge(
                    fromEvent(document, "mouseup"),
                    fromEvent(document, "touchend")
                  ).pipe(
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
    <div ref={wrapperRef}>
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
          onTouchStart={dragStartCallback}
        />
      </Stage>
    </div>
  );
};

export default VerticalLine;
