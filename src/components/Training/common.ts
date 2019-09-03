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
  calcStateFromPos: (pos: number) => number;
  params: number[];
  useX?: boolean;
  wrapperRef?: RefObject<E>;
}

type Inputs<E extends HTMLElement> = [
  UseDragOptions<E>["onUpdate"],
  UseDragOptions<E>["disableOperation"],
  UseDragOptions<E>["calcStateFromPos"],
  UseDragOptions<E>["params"],
  UseDragOptions<E>["useX"]
];

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
    opts.params,
    opts.useX
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
          withLatestFrom(inputs$, state$),
          filter(([, [, disableOperation]]) => !disableOperation),
          map(
            ([[e, i], [, , calcStateFromPos, , useX], st]) =>
              [
                e.evt instanceof TouchEvent
                  ? useX
                    ? e.evt.targetTouches[0].pageX
                    : e.evt.targetTouches[0].pageY
                  : useX
                  ? e.evt.pageX
                  : e.evt.pageY,
                wrapperRef.current
                  ? useX
                    ? wrapperRef.current.getBoundingClientRect().left
                    : wrapperRef.current.getBoundingClientRect().top
                  : 0,
                i,
                st,
                calcStateFromPos
              ] as const
          ),
          map(
            ([pageY, offsetY, i, st, calcStateFromPos]) =>
              [
                clamp(calcStateFromPos(pageY - offsetY), 0, 1),
                offsetY,
                i,
                st
              ] as const
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
              withLatestFrom(inputs$, state$),
              map(
                ([e2, [, , calcStateFromY, , useX], st]) =>
                  [
                    clamp(
                      calcStateFromY(
                        (e2 instanceof TouchEvent
                          ? useX
                            ? e2.targetTouches[0].pageX
                            : e2.targetTouches[0].pageY
                          : useX
                          ? e2.pageX
                          : e2.pageY) - offsetY
                      ),
                      0,
                      1
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
    opts.firstState || [],
    inputs
  );
  return [callback, state, wrapperRef];
};
