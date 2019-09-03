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
  state?: number[];
  isAnswerShown?: boolean;
  screenSize: number;
  scaleCorrection?: number;
  disableOperation?: boolean;
  onUpdate?: (state: number[]) => void;
}

export interface UseDragOptions<E extends HTMLElement> {
  firstState: number[] | undefined;
  onUpdate?: (state: number[]) => void;
  disableOperation?: boolean;
  calcStateFromPos: (
    x: number,
    y: number,
    i: number,
    state: number[]
  ) => number[];
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
  number[],
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
    number[],
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
          withLatestFrom(inputs$),
          filter(([, [, disableOperation]]) => !disableOperation),
          map(
            ([[e, i]]) =>
              [
                getPos(e.evt),
                wrapperRef.current
                  ? [
                      wrapperRef.current.getBoundingClientRect().left,
                      wrapperRef.current.getBoundingClientRect().top
                    ]
                  : [],
                i
              ] as const
          ),
          filter(([, offset]) => offset.length > 0),
          mergeMap(([first, offset, i]) =>
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
                calcStateFromPos(e[0] - offset[0], e[1] - offset[1], i, st).map(
                  s => clamp(s, 0, 1)
                )
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
