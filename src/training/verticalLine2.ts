import { TrainingMenu } from "./common";

const verticalLine2: TrainingMenu = {
  paramsSize: 3,
  stateSize: 1,
  validateParams: ([barLength, bar2Length, ratio]) =>
    barLength > 0.3 &&
    bar2Length > 0.3 &&
    Math.abs(barLength - bar2Length) >= 0.2 &&
    ratio > 0.1 &&
    ratio < 0.9,
  judgeScore: (params, state) => {
    if (params[0] === 0) return 0;
    const range = 0.3 - 0.1 * params[0];
    return state
      ? 1 - Math.min(range, Math.abs(params[2] - state[0])) / range
      : 0;
  }
};

export default verticalLine2;
