import { TrainingMenu } from "./common";

const verticalLine2: TrainingMenu = {
  paramsSize: 3,
  stateSize: 1,
  validateParams: ([barLength, bar2Length, ratio]) =>
    barLength > 0.2 &&
    bar2Length > 0.2 &&
    Math.abs(barLength - bar2Length) >= 0.2 &&
    ratio > 0.1 &&
    ratio < 0.9,
  judgeScore: (params, state) =>
    state ? 1 - Math.min(0.3, Math.abs(params[2] - state[0])) / 0.3 : 0
};

export default verticalLine2;
