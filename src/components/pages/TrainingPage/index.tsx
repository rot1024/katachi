/** @jsx jsx */
import React, { useState, useCallback, useMemo, useRef, Fragment } from "react";
import { jsx, css } from "@emotion/core";

import {
  TrainingType,
  validateState,
  judgeScore,
  initTrainings
} from "@katachi/training";
import Training from "@katachi/components/components/Training";
import Button from "@katachi/components/components/Button";
import Timer from "@katachi/components/components/Timer";
import TrainingStart from "@katachi/components/components/TrainingStart";
import TrainingResult from "@katachi/components/components/TrainingResult";
import Rating from "@katachi/components/components/Rating";

export { TrainingType };

export interface Props {
  className?: string;
  type: TrainingType;
  scaleCorrection?: number;
  duration: number;
  onFinish?: (
    scores: number[],
    type: TrainingType,
    trainings: number[][]
  ) => void;
}

const screenSize = 500;
const trainingCount = 10;

const TrainingPage: React.FC<Props> = ({
  className,
  type,
  scaleCorrection,
  duration,
  onFinish
}) => {
  const scores = useRef<number[]>([]);
  const trainings = useMemo(() => initTrainings(type, trainingCount), [type]);
  const [started, setStarted] = useState(false);
  const [currentTraining, changeTraining] = useState(0);
  const [currentState, setCurrentState] = useState<number[]>();
  const [isAnswerShown, setAnswerShown] = useState(false);

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

  return (
    <div
      css={css`
        position: relative;
        padding: 1em;
      `}
      className={className}
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
        <Fragment>
          <Timer
            id={currentTraining}
            enabled={!isAnswerShown}
            duration={duration}
            onTimeUp={handleTimeUp}
          />
          {isAnswerShown && scores.current.length > 0 && (
            <div
              css={css`
                position: absolute;
                top: 10px;
                left: 50%;
                transform: translateX(-50%);
              `}
            >
              <Rating score={scores.current[scores.current.length - 1]} />
            </div>
          )}
          <div
            css={css`
              text-align: center;
            `}
          >
            <Training
              css={css`
                display: inline-block;
              `}
              type={type}
              params={trainings[currentTraining]}
              screenSize={screenSize}
              scaleCorrection={scaleCorrection}
              isAnswerShown={isAnswerShown}
              disableOperation={isAnswerShown}
              onUpdate={s => setCurrentState(s)}
            />
          </div>
          {isAnswerable && <Button onClick={handleAnswer}>OK</Button>}
          {isAnswerShown && <Button onClick={handleNext}>Next</Button>}
        </Fragment>
      )}
    </div>
  );
};

export default TrainingPage;
