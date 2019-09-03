import { useEventCallback } from "rxjs-hooks";
import { KonvaEventObject } from "konva/types/Node";
import {
  withLatestFrom,
  filter,
  map,
  distinctUntilChanged,
  mapTo,
  takeUntil,
  mergeMap,
  startWith,
  tap,
  skip
} from "rxjs/operators";
import { numberArrayEqual, clamp } from "@katachi/util";
import { useRef, RefObject } from "react";
import { fromEvent, merge } from "rxjs";

export interface TrainingProps {
  className?: string;
  params: number[];
  state?: (number | undefined)[];
  isAnswerShown?: boolean;
  screenSize: number;
  scaleCorrection?: number;
  disableOperation?: boolean;
  onUpdate?: (state: (number | undefined)[]) => void;
}

export type CalcStateFn = (args: {
  x: number;
  y: number;
  index: number;
  state: (number | undefined)[];
  dx: number;
  dy: number;
  firstX: number;
  firstY: number;
  isFirstTime: boolean;
  lastState: (number | undefined)[];
}) => (number | undefined)[];

export interface UseDragOptions<E extends HTMLElement> {
  firstState: (number | undefined)[] | undefined;
  onUpdate?: (state: (number | undefined)[]) => void;
  disableOperation?: boolean;
  calcStateFromPos: CalcStateFn;
  params: number[];
  wrapperRef?: RefObject<E>;
}

type Inputs<E extends HTMLElement> = [
  UseDragOptions<E>["onUpdate"],
  UseDragOptions<E>["disableOperation"],
  UseDragOptions<E>["calcStateFromPos"],
  UseDragOptions<E>["params"]
];

const getPos = (e: MouseEvent | TouchEvent) =>
  e instanceof TouchEvent
    ? [e.targetTouches[0].pageX, e.targetTouches[0].pageY]
    : [e.pageX, e.pageY];

export const useDrag = <E extends HTMLElement>(
  opts: UseDragOptions<E>
): [
  (e: [KonvaEventObject<MouseEvent | TouchEvent>, number]) => void,
  (number | undefined)[],
  RefObject<E>
] => {
  const inputs: Inputs<E> = [
    opts.onUpdate,
    opts.disableOperation,
    opts.calcStateFromPos,
    opts.params
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const wrapperRef = opts.wrapperRef || useRef<E>(null);
  const [callback, state] = useEventCallback<
    [KonvaEventObject<MouseEvent | TouchEvent>, number],
    (number | undefined)[],
    Inputs<E>
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
            ([[e, i], , st]) =>
              [
                getPos(e.evt),
                wrapperRef.current
                  ? [
                      wrapperRef.current.getBoundingClientRect().left,
                      wrapperRef.current.getBoundingClientRect().top
                    ]
                  : [],
                i,
                st.length === 0,
                st
              ] as const
          ),
          filter(([, offset]) => offset.length > 0),
          mergeMap(([first, offset, i, isFirstTime, lastState]) =>
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
                    withLatestFrom(inputs$, state$),
                    tap(([, [onUpdate, disableOperation], st]) => {
                      if (onUpdate && !disableOperation) {
                        onUpdate(st);
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
              map(e => getPos(e)),
              startWith(first),
              withLatestFrom(inputs$, state$),
              map(([e, [, , calcStateFromPos], st]) =>
                calcStateFromPos({
                  x: e[0] - offset[0],
                  y: e[1] - offset[1],
                  index: i,
                  state: st,
                  dx: e[0] - first[0],
                  dy: e[1] - first[1],
                  firstX: first[0],
                  firstY: first[1],
                  isFirstTime,
                  lastState
                }).map(s => (typeof s === "number" ? clamp(s, 0, 1) : s))
              )
            )
          )
        )
      ),
    opts.firstState || [],
    inputs
  );
  return [callback, state, wrapperRef];
};
