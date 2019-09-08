import { TrainingMenu, Level } from "./common";

const squareSkewedLine: TrainingMenu = {
  title: "正方形と斜めの線",
  paramsSize: 2,
  stateSize: 2,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 30000,
    [Level.Hard]: 10000,
    [Level.Ultimate]: 3000
  },
  validateParams: ([r, r2]) =>
    r > 0.1 && r < 0.9 && r2 > 0.1 && r2 < 0.9 && Math.abs(r - r2) > 0.3,
  judgeScore: (params, state) => {
    if (!state) return 0;
    const range = 0.2;
    return (
      state
        .map((s, i) =>
          typeof s === "number"
            ? 1 - Math.min(range, Math.abs(params[i] - s)) / range
            : 0
        )
        .reduce((a, b) => a + b, 0) / 2
    );
  }
};

export default squareSkewedLine;
