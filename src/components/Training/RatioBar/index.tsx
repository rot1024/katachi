import React, { useCallback } from "react";
import { Stage, Layer, Rect } from "react-konva";

import { TrainingProps, useDrag } from "../common";

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
  state: firstState,
  isAnswerShown,
  screenSize,
  scaleCorrection = 1,
  disableOperation,
  onUpdate,
  pointCount,
  direction
}) => {
  const lineLength = calcLength(params[0], scaleCorrection);
  const line2Length = calcLength(params[1], scaleCorrection);
  const longerLength = Math.max(lineLength, line2Length);
  const answer = params.slice(2);

  const calcStateFromPos = useCallback(
    (y: number) =>
      direction === Direction.Horizontal
        ? (y - (screenSize - longerLength) / 2) / lineLength
        : (y -
            ((screenSize - longerLength) / 2 + (longerLength - lineLength))) /
          lineLength,
    [lineLength, longerLength, screenSize, direction]
  );

  const [dragStartCallback, state, wrapperRef] = useDrag<HTMLDivElement>({
    firstState,
    onUpdate,
    disableOperation,
    calcStateFromPos,
    params,
    useX: direction === Direction.Horizontal
  });

  const mainBarX = (screenSize / 3) * 2;
  const secondBarX = screenSize / 3;
  const barY = (screenSize - longerLength) / 2;

  return (
    <div ref={wrapperRef} className={className}>
      <Stage width={screenSize} height={screenSize}>
        <Layer>
          <Rect stroke="#eee" width={screenSize} height={screenSize} />
        </Layer>
        <VerticalLineLayer
          x={direction === Direction.Horizontal ? barY : secondBarX}
          y={direction === Direction.Horizontal ? secondBarX : barY}
          lineLength={line2Length}
          longerLength={longerLength}
          ratio={answer}
          direction={direction}
          pointCount={pointCount}
        />
        <VerticalLineLayer
          x={direction === Direction.Horizontal ? barY : mainBarX}
          y={direction === Direction.Horizontal ? mainBarX : barY}
          lineLength={lineLength}
          longerLength={longerLength}
          ratio={state}
          answerRatio={isAnswerShown ? answer : undefined}
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
