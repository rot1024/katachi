import React, { useState, useCallback, useMemo, useRef } from "react";

import {
  TrainingType,
  validateState,
  judgeScore,
  initTrainings
} from "@katachi/training";
import Training from "@katachi/components/components/Training";
import Button from "@katachi/components/components/Button";

export { TrainingType };

export interface Props {
  className?: string;
  type: TrainingType;
  scaleCorrection?: number;
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
  onFinish
}) => {
  const scores = useRef<number[]>([]);
  const trainings = useMemo(() => initTrainings(type, trainingCount), [type]);
  const [currentTraining, changeTraining] = useState(0);
  const [currentState, setCurrentState] = useState<number[]>();
  const [isAnswerShown, setAnswerShown] = useState(false);

  const handleAnswer = useCallback(() => {
    if (trainings.length <= currentTraining || !currentState) return;
    const score = judgeScore(type, trainings[currentTraining], currentState);
    scores.current = [...scores.current, score];
    setAnswerShown(true);
  }, [currentState, currentTraining, trainings, type]);

  const handleNext = useCallback(() => {
    setAnswerShown(false);
    setCurrentState(undefined);
    if (trainings.length - 1 <= currentTraining) {
      if (onFinish) {
        onFinish(scores.current, type, trainings);
      }
    } else {
      changeTraining(i => i + 1);
    }
  }, [currentTraining, onFinish, trainings, type]);

  const isAnswerable = useMemo(
    () => !isAnswerShown && currentState && validateState(type, currentState),
    [currentState, isAnswerShown, type]
  );

  if (trainings.length <= currentTraining) return null;

  return (
    <div className={className}>
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
    </div>
  );
};

export default TrainingPage;
