/** @jsx jsx */
import React, { useState, useCallback, useMemo, useRef, Fragment } from "react";
import { jsx, css } from "@emotion/core";
import useResizeObserver from "use-resize-observer";

import {
  TrainingType,
  validateState,
  judgeScore,
  initTrainings,
  getDuration,
  Level
} from "@katachi/training";
import Training from "@katachi/components/components/Training";
import Button from "@katachi/components/components/Button";
import Timer from "@katachi/components/components/Timer";
import TrainingStart from "@katachi/components/components/TrainingStart";
import TrainingResult from "@katachi/components/components/TrainingResult";
import Rating from "@katachi/components/components/Rating";

export { TrainingType, Level };

export interface Props {
  className?: string;
  type: TrainingType;
  scaleCorrection?: number;
  level: Level;
  onFinish?: (
    scores: number[],
    type: TrainingType,
    trainings: number[][]
  ) => void;
}

const trainingCount = 10;
const maxScreenSize = 500;

const TrainingPage: React.FC<Props> = ({
  className,
  type,
  scaleCorrection,
  level,
  onFinish
}) => {
  const scores = useRef<number[]>([]);
  const trainings = useMemo(() => initTrainings(type, trainingCount), [type]);
  const [started, setStarted] = useState(false);
  const [currentTraining, changeTraining] = useState(0);
  const [currentState, setCurrentState] = useState<number[]>();
  const [isAnswerShown, setAnswerShown] = useState(false);
  const [resizeRef, width] = useResizeObserver();

  const handleAnswer = useCallback(() => {
    if (!trainings || trainings.length <= currentTraining || !currentState)
      return;
    const score = judgeScore(type, trainings[currentTraining], currentState);
    scores.current = [...scores.current, score];
    setAnswerShown(true);
  }, [currentState, currentTraining, trainings, type]);

  const handleNext = useCallback(() => {
    if (!trainings) return;
    setAnswerShown(false);
    setCurrentState(undefined);
    changeTraining(i => i + 1);
  }, [trainings]);

  const isAnswerable = useMemo(
    () => !isAnswerShown && currentState && validateState(type, currentState),
    [currentState, isAnswerShown, type]
  );

  const handleTimeUp = useCallback(() => {
    if (!trainings || trainings.length <= currentTraining) return;
    const score = judgeScore(
      type,
      trainings[currentTraining],
      isAnswerable ? currentState : undefined
    );
    scores.current = [...scores.current, score];
    setAnswerShown(true);
  }, [currentState, currentTraining, isAnswerable, trainings, type]);

  const handleStart = useCallback(() => {
    setStarted(true);
  }, []);

  if (!trainings) return null;
  const trainingSize = Math.min(width, maxScreenSize);
  const duration = getDuration(type, level);

  return (
    <div
      css={css`
        position: relative;
        padding: 1em;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      `}
      className={className}
    >
      <div
        ref={resizeRef}
        css={css`
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        `}
      >
        {!started ? (
          <TrainingStart duration={3000} onStart={handleStart} />
        ) : trainings.length <= currentTraining ? (
          <Fragment>
            <TrainingResult type={type} scores={scores.current} />
            <Button
              onClick={() => {
                if (onFinish) {
                  onFinish(scores.current, type, trainings);
                }
              }}
            >
              Finish
            </Button>
          </Fragment>
        ) : (
          <div
            css={css`
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
            `}
          >
            <Timer
              css={css`
                position: absolute;
                top: 0;
                left: 0;
              `}
              id={currentTraining}
              enabled={!isAnswerShown}
              duration={duration}
              onTimeUp={handleTimeUp}
            />
            <div
              css={css`
                text-align: center;
                visibility: ${isAnswerShown ? "visible" : "hidden"};
              `}
            >
              <Rating
                score={
                  scores.current.length > 0
                    ? scores.current[scores.current.length - 1]
                    : 0
                }
              />
            </div>
            <div
              css={css`
                flex: auto;
                text-align: center;
              `}
            >
              <Training
                css={css`
                  margin: 0 auto;
                  width: ${trainingSize}px;
                `}
                type={type}
                params={trainings[currentTraining]}
                screenSize={trainingSize}
                scaleCorrection={scaleCorrection}
                isAnswerShown={isAnswerShown}
                disableOperation={isAnswerShown}
                onUpdate={setCurrentState}
              />
            </div>
            <div
              css={css`
                margin-top: auto;
              `}
            >
              {isAnswerable && <Button onClick={handleAnswer}>OK</Button>}
              {isAnswerShown && <Button onClick={handleNext}>Next</Button>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingPage;
