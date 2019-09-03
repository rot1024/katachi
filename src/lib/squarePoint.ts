import { TrainingMenu, Level } from "./common";

const squarePoint: TrainingMenu = {
  title: "正方形の中の点",
  paramsSize: 3,
  stateSize: 2,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 30000,
    [Level.Hard]: 10000,
    [Level.Ultimate]: 3000
  },
  validateParams: ([s, x, y]) =>
    s > 0.3 && x > 0.1 && x < 0.9 && y > 0.1 && y < 0.9,
  judgeScore: (params, state) => {
    if (params[1] === 0) return 0;
    const range = 0.3 - 0.1 * params[0];
    const res = state
      ? state
          .map(
            (s, i) => 1 - Math.min(range, Math.abs(params[i + 1] - s)) / range
          )
          .reduce((a, b) => a + b, 0) / 2
      : 0;
    return res;
  }
};

export default squarePoint;
