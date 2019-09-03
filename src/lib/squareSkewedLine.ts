import { TrainingMenu, Level } from "./common";

const squareSkewedLine: TrainingMenu = {
  title: "正方形と斜めの線",
  paramsSize: 3,
  stateSize: 2,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 30000,
    [Level.Hard]: 10000,
    [Level.Ultimate]: 3000
  },
  validateParams: ([s, r, r2]) =>
    s > 0.3 &&
    r > 0.1 &&
    r < 0.9 &&
    r2 > 0.1 &&
    r2 < 0.9 &&
    Math.abs(r - r2) > 0.3,
  judgeScore: (params, state) => {
    if (params[1] === 0 || !state) return 0;
    const range = 0.3 - 0.1 * params[0];
    return (
      state
        .map((s, i) =>
          typeof s === "number"
            ? 1 - Math.min(range, Math.abs(params[i + 1] - s)) / range
            : 0
        )
        .reduce((a, b) => a + b, 0) / 2
    );
  }
};

export default squareSkewedLine;
