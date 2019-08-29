import React, { useState, useCallback, useMemo, useRef } from "react";

import {
  TrainingType,
  validateState,
  judgeScore,
  initTrainings
} from "@katachi/training";
import Training from "@katachi/components/components/Training";
import Button from "@katachi/components/components/Button";
import Timer from "@katachi/components/components/Timer";
import TrainingResult from "@katachi/components/components/TrainingResult";

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

  if (!trainings) return null;

  return (
    <div className={className}>
      {trainings.length <= currentTraining ? (
        <>
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
        </>
      ) : (
        <>
          <Timer
            id={currentTraining}
            enabled={!isAnswerShown}
            duration={duration}
            onTimeUp={handleTimeUp}
          />
          <Training
            type={type}
            params={trainings[currentTraining]}
            screenSize={screenSize}
            scaleCorrection={scaleCorrection}
            isAnswerShown={isAnswerShown}
            disableOperation={isAnswerShown}
            onUpdate={s => setCurrentState(s)}
          />
          {isAnswerable && <Button onClick={handleAnswer}>OK</Button>}
          {isAnswerShown && <Button onClick={handleNext}>Next</Button>}
        </>
      )}
    </div>
  );
};

export default TrainingPage;
