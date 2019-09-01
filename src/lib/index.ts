import { TrainingType, TrainingMenu, Rating, Level } from "./common";
import verticalLine2 from "./verticalLine2";

export * from "./common";
export { TrainingType, Rating, Level };

const trainings: { [key in TrainingType]: TrainingMenu } = {
  [TrainingType.VerticalLine2]: verticalLine2
};

export const initTrainings = (
  type: TrainingType,
  count: number
): number[][] | undefined => {
  const params = new Array(count).fill(0).map(() => initTraining(type));
  return params.every((p): p is number[] => typeof p !== "undefined")
    ? (params as number[][])
    : undefined;
};

export const initTraining = (type: TrainingType): number[] | undefined => {
  const trainingMenu = trainings[type];
  for (let i = 0; i < 100; i++) {
    const params = new Array(trainingMenu.paramsSize)
      .fill(0)
      .map(() => Math.random());
    const validated = trainingMenu.validateParams(params);
    if (Array.isArray(validated)) {
      return validated;
    }
    if (validated) {
      return params;
    }
  }
};

export const validateState = (type: TrainingType, state: number[]) =>
  state.length === trainings[type].stateSize;

export const judgeScore = (
  type: TrainingType,
  params: number[],
  state?: number[]
) => trainings[type].judgeScore(params, state);

export const getRating = (score: number) => {
  if (score === 1) {
    return Rating.Legend;
  }
  if (score >= 0.9) {
    return Rating.Excellent;
  }
  if (score >= 0.7) {
    return Rating.Good;
  }
  return Rating.Bad;
};

export const getDuration = (type: TrainingType, level: Level) => {
  return trainings[type].duration[level];
};