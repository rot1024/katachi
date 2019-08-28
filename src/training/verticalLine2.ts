import { TrainingMenu } from "./common";

const verticalLine2: TrainingMenu = {
  paramsSize: 3,
  stateSize: 1,
  validateParams: ([barLength, bar2Length, ratio]) =>
    Math.abs(barLength - bar2Length) >= 0.1 && ratio > 0.1 && ratio < 0.9,
  judgeScore: (params, state) =>
    1 - Math.min(0.3, Math.abs(params[2] - state[1])) / 0.3
};

export default verticalLine2;
