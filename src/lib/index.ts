import { TrainingType, TrainingMenu, Rating, Level } from "./common";
import verticalLine1 from "./verticalLine1";
import verticalLine2 from "./verticalLine2";
import horizontalLine1 from "./horizontalLine1";
import horizontalLine2 from "./horizontalLine2";
import square from "./square";
import squareVerticalLine from "./squareVerticalLine";
import squareHorizontalLine from "./squareHorizontalLine";
import squareSkewedLine from "./squareSkewedLine";
import squarePoint from "./squarePoint";
import squareDogleggedLine from "./squareDogleggedLine";

export * from "./common";
export { TrainingType, Rating, Level };

const trainings: { [key in TrainingType]: TrainingMenu } = {
  [TrainingType.VerticalLine1]: verticalLine1,
  [TrainingType.VerticalLine2]: verticalLine2,
  [TrainingType.HorizontalLine1]: horizontalLine1,
  [TrainingType.HorizontalLine2]: horizontalLine2,
  [TrainingType.Square]: square,
  [TrainingType.SquareVerticalLine]: squareVerticalLine,
  [TrainingType.SquareHorizontalLine]: squareHorizontalLine,
  [TrainingType.SquareSkewedLine]: squareSkewedLine,
  [TrainingType.SquarePoint]: squarePoint,
  [TrainingType.SquareDogleggedLine]: squareDogleggedLine
};

export const allTrainingTypes = (): TrainingType[] =>
  Object.keys(trainings) as any;

export const humanReadableScore = (score: number) => Math.round(score * 100);

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
  for (let i = 0; i < 1000; i++) {
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

export const validateState = (
  type: TrainingType,
  state: (number | undefined)[]
): state is number[] =>
  state.length === trainings[type].stateSize &&
  state.every(s => typeof s === "number");

export const judgeScore = (
  type: TrainingType,
  params: number[],
  state?: (number | undefined)[]
) => trainings[type].judgeScore(params, state);

export const getRating = (score: number) => {
  if (score >= 0.98) {
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

export const getTitle = (type: TrainingType) => {
  return trainings[type].title;
};
