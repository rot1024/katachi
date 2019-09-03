import { TrainingMenu, Level } from "./common";

const verticalLine1: TrainingMenu = {
  title: "垂直な棒の比率 1点",
  paramsSize: 3,
  stateSize: 1,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 15000,
    [Level.Hard]: 4000,
    [Level.Ultimate]: 1000
  },
  validateParams: ([barLength, bar2Length, ratio]) =>
    barLength > 0.3 &&
    bar2Length > 0.3 &&
    Math.abs(barLength - bar2Length) >= 0.2 &&
    ratio > 0.1 &&
    ratio < 0.9,
  judgeScore: (params, state) => {
    if (params[0] === 0 || !state || typeof state[0] !== "number") return 0;
    const range = 0.3 - 0.1 * params[0];
    return (
      1 - Math.min(range, Math.abs(params[2] - (state[0] as number))) / range
    );
  }
};

export default verticalLine1;
