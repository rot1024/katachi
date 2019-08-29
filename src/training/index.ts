import { TrainingType, TrainingMenu, Score, Level } from "./common";
import verticalLine2 from "./verticalLine2";

export * from "./common";
export { TrainingType, Score, Level };

const trainings: { [key in TrainingType]: TrainingMenu } = {
  [TrainingType.VerticalLine2]: verticalLine2
};

export const initTrainings = (type: TrainingType, count: number): number[][] =>
  new Array(count).fill(0).map(() => initTraining(type));

export const initTraining = (type: TrainingType): number[] => {
  const trainingMenu = trainings[type];
  let newParams: number[] = [];
  for (let i = 0; i < 5; i++) {
    newParams = new Array(trainingMenu.paramsSize)
      .fill(0)
      .map(() => Math.random());
    const validated = trainingMenu.validateParams(newParams);
    if (Array.isArray(validated)) {
      newParams = validated;
    }
    if (validated) {
      return newParams;
    }
  }
  return newParams;
};

export const validateState = (type: TrainingType, state: number[]) =>
  state.length === trainings[type].stateSize;

export const judgeScore = (
  type: TrainingType,
  params: number[],
  state?: number[]
) => trainings[type].judgeScore(params, state);
