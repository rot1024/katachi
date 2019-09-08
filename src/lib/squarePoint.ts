import { TrainingMenu, Level } from "./common";

const squarePoint: TrainingMenu = {
  title: "正方形の中の点",
  paramsSize: 2,
  stateSize: 2,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 30000,
    [Level.Hard]: 10000,
    [Level.Ultimate]: 3000
  },
  validateParams: ([x, y]) => x > 0.1 && x < 0.9 && y > 0.1 && y < 0.9,
  judgeScore: (params, state) => {
    if (!state) return 0;
    const range = 0.3 - 0.1 * params[0];
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

export default squarePoint;
