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
import VerticalLineLayer from "./LineLayer";

export enum Direction {
  Vertical,
  Horizontal
}

export interface Props extends TrainingProps {
  pointCount: number;
  direction: Direction;
}

const RatioBar: React.FC<Props> = ({
  className,
  params,
  state,
  isAnswerShown,
  screenSize,
  scaleCorrection = 1,
  disableOperation,
  onUpdate,
  pointCount,
  direction
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lineLength = calcLength(params[0], scaleCorrection);
  const line2Length = calcLength(params[1], scaleCorrection);
  const longerLength = Math.max(lineLength, line2Length);
  const pointRatio = params.slice(2);

  const calcStateFromY = useCallback(
    (y: number) =>
      clamp(
        direction === Direction.Horizontal
          ? (y - (screenSize - longerLength) / 2) / lineLength
          : (y -
              ((screenSize - longerLength) / 2 + (longerLength - lineLength))) /
              lineLength,
        0,
        1
      ),
    [lineLength, longerLength, screenSize, direction]
  );

  type DragStartInputs = [
    typeof onUpdate,
    typeof disableOperation,
    typeof calcStateFromY,
    typeof params,
    typeof direction
  ];
  const dragStartInputs: DragStartInputs = [
    onUpdate,
    disableOperation,
    calcStateFromY,
    params,
    direction
  ];
  const [dragStartCallback, statePointRatio2] = useEventCallback<
    [KonvaEventObject<MouseEvent | TouchEvent>, number],
    number[],
    DragStartInputs
  >(
    (event$, inputs$, state$) =>
      merge(
        inputs$.pipe(
          map(([, , , p]) => p),
          distinctUntilChanged(numberArrayEqual),
          mapTo([])
        ),
        event$.pipe(
          withLatestFrom(inputs$, state$),
          filter(([, [, disableOperation]]) => !disableOperation),
          map(
            ([[e, i], [, , calcStateFromY, , direction], st]) =>
              [
                e.evt instanceof TouchEvent
                  ? direction === Direction.Horizontal
                    ? e.evt.targetTouches[0].pageX
                    : e.evt.targetTouches[0].pageY
                  : direction === Direction.Horizontal
                  ? e.evt.pageX
                  : e.evt.pageY,
                wrapperRef.current
                  ? direction === Direction.Horizontal
                    ? wrapperRef.current.getBoundingClientRect().left
                    : wrapperRef.current.getBoundingClientRect().top
                  : 0,
                i,
                st,
                calcStateFromY
              ] as const
          ),
          map(
            ([pageY, offsetY, i, st, calcStateFromY]) =>
              [calcStateFromY(pageY - offsetY), offsetY, i, st] as const
          ),
          mergeMap(([firstY, offsetY, i, st]) =>
            merge(
              fromEvent<MouseEvent>(document, "mousemove"),
              fromEvent<TouchEvent>(document, "touchmove")
            ).pipe(
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
              withLatestFrom(inputs$, state$),
              map(
                ([e2, [, , calcStateFromY, , direction], st]) =>
                  [
                    calcStateFromY(
                      (e2 instanceof TouchEvent
                        ? direction === Direction.Horizontal
                          ? e2.targetTouches[0].pageX
                          : e2.targetTouches[0].pageY
                        : direction === Direction.Horizontal
                        ? e2.pageX
                        : e2.pageY) - offsetY
                    ),
                    st
                  ] as const
              ),
              startWith([firstY, st] as const),
              map(([y, st]) => [...st.slice(0, i), y, ...st.slice(i + 1)])
            )
          )
        )
      ),
    state || [],
    dragStartInputs
  );

  const mainBarX = (screenSize / 3) * 2;
  const secondBarX = screenSize / 3;
  const barY = (screenSize - longerLength) / 2;

  return (
    <div ref={wrapperRef}>
      <Stage className={className} width={screenSize} height={screenSize}>
        <Layer>
          <Rect stroke="#eee" width={screenSize} height={screenSize} />
        </Layer>
        <VerticalLineLayer
          x={direction === Direction.Horizontal ? barY : secondBarX}
          y={direction === Direction.Horizontal ? secondBarX : barY}
          lineLength={line2Length}
          longerLength={longerLength}
          ratio={pointRatio}
          direction={direction}
          pointCount={pointCount}
        />
        <VerticalLineLayer
          x={direction === Direction.Horizontal ? barY : mainBarX}
          y={direction === Direction.Horizontal ? mainBarX : barY}
          lineLength={lineLength}
          longerLength={longerLength}
          ratio={statePointRatio2}
          answerRatio={isAnswerShown ? pointRatio : undefined}
          onMouseDown={(e, i) => dragStartCallback([e, i])}
          onTouchStart={(e, i) => dragStartCallback([e, i])}
          direction={direction}
          pointCount={pointCount}
        />
      </Stage>
    </div>
  );
};

export default RatioBar;
