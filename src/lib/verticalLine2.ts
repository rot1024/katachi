import { TrainingMenu, Level } from "./common";

const verticalLine2: TrainingMenu = {
  title: "垂直な棒の比率 2点",
  paramsSize: 4,
  stateSize: 2,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 30000,
    [Level.Hard]: 10000,
    [Level.Ultimate]: 3000
  },
  validateParams: ([barLength, bar2Length, ratio, ratio2]) =>
    barLength > 0.3 &&
    bar2Length > 0.3 &&
    Math.abs(barLength - bar2Length) >= 0.2 &&
    ratio > 0.1 &&
    ratio < 0.9 &&
    ratio2 > 0.1 &&
    ratio2 < 0.9 &&
    ratio2 - ratio > 0.3,
  judgeScore: (params, state) => {
    if (params[0] === 0) return 0;
    const range = 0.3 - 0.1 * params[0];
    return state
      ? state
          .slice(0, 2)
          .sort()
          .map(
            (s, i) => 1 - Math.min(range, Math.abs(params[2 + i] - s)) / range
          )
          .reduce((a, b) => a + b, 0) / state.length
      : 0;
  }
};

export default verticalLine2;
