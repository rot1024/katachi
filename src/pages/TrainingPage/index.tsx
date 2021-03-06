/** @jsx jsx */
import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  Fragment,
  useEffect
} from "react";
import { jsx, css } from "@emotion/core";
import useResizeObserver from "use-resize-observer";

import {
  TrainingType,
  validateState,
  judgeScore,
  initTrainings,
  getDuration,
  Level,
  TrainingHistory
} from "@katachi/lib";
import Training from "@katachi/components/Training";
import Button from "@katachi/components/Button";
import Timer from "@katachi/components/Timer";
import TrainingStart from "@katachi/components/TrainingStart";
import TrainingResult from "@katachi/components/TrainingResult";
import Rating from "@katachi/components/Rating";

export { TrainingType, Level };

export interface Props {
  className?: string;
  type: TrainingType;
  scaleCorrection?: number;
  level: Level;
  onResult?: (history: TrainingHistory) => void;
  onFinish?: () => void;
}

const trainingCount = 10;
const maxScreenSize = 500;

const TrainingPage: React.FC<Props> = ({
  className,
  type,
  scaleCorrection,
  level,
  onResult,
  onFinish
}) => {
  const finishedAt = useRef<Date>();
  const status = useRef<(number | undefined)[][]>([]);
  const scores = useRef<number[]>([]);
  const trainings = useMemo(() => initTrainings(type, trainingCount), [type]);
  const [started, setStarted] = useState(false);
  const [currentTraining, changeTraining] = useState(0);
  const [currentState, setCurrentState] = useState<(number | undefined)[]>();
  const [isAnswerShown, setAnswerShown] = useState(false);
  const [resizeRef, width] = useResizeObserver();
  const [nextButtonVisible, setNextButtonVisible] = useState(false);
  useEffect(() => {
    if (isAnswerShown) {
      const timeout = setTimeout(() => {
        setNextButtonVisible(true);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setNextButtonVisible(false);
    }
  }, [isAnswerShown]);

  const handleAnswer = useCallback(() => {
    if (!trainings || trainings.length <= currentTraining || !currentState)
      return;
    const score = judgeScore(type, trainings[currentTraining], currentState);
    scores.current = [...scores.current, score];
    status.current = [...status.current, currentState];
    setAnswerShown(true);
  }, [currentState, currentTraining, trainings, type]);

  const handleNext = useCallback(() => {
    if (!trainings) return;
    setAnswerShown(false);
    setCurrentState(undefined);
    changeTraining(currentTraining + 1);
    if (
      trainings.length <= currentTraining + 1 &&
      onResult &&
      !finishedAt.current
    ) {
      finishedAt.current = new Date();
      onResult({
        datetime: finishedAt.current,
        level: level,
        scores: scores.current,
        type,
        params: trainings,
        state: status.current as number[][]
      });
    }
  }, [currentTraining, level, onResult, trainings, type]);

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
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1em;
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
                  onFinish();
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
              <div
                css={css`
                  margin: 0 auto;
                  width: ${trainingSize}px;
                `}
              >
                <Training
                  type={type}
                  params={trainings[currentTraining]}
                  screenSize={trainingSize}
                  scaleCorrection={scaleCorrection}
                  isAnswerShown={isAnswerShown}
                  disableOperation={isAnswerShown}
                  onUpdate={setCurrentState}
                />
              </div>
            </div>
            <div
              css={css`
                margin-top: auto;
              `}
            >
              {isAnswerable && <Button onClick={handleAnswer}>OK</Button>}
              {nextButtonVisible && (
                <Button onClick={handleNext}>
                  {trainings.length - 1 <= currentTraining
                    ? "Check Result"
                    : "Next"}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingPage;
