import { TrainingMenu, Level } from "./common";

const squareDogleggedLine: TrainingMenu = {
  title: "正方形とくの字",
  paramsSize: 5,
  stateSize: 4,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 40000,
    [Level.Hard]: 15000,
    [Level.Ultimate]: 5000
  },
  validateParams: ([, top, bottom, x, y]) =>
    top > 0.1 &&
    top < 0.9 &&
    bottom > 0.1 &&
    bottom < 0.9 &&
    x > 0.1 &&
    x < 0.9 &&
    y > 0.3 &&
    y < 0.7 &&
    (Math.max(top, bottom) < x || Math.min(top, bottom) > x) &&
    Math.abs(top - bottom) > 0.3 &&
    Math.abs(top - x) > 0.1 &&
    Math.abs(bottom - x) > 0.1,
  judgeScore: (params, state) => {
    if (params[0] === 0 || !state) return 0;
    const range = 0.3 - 0.1 * params[0];
    return (
      state
        .map((s, i) =>
          typeof s === "number"
            ? 1 - Math.min(range, Math.abs(params[i + 1] - s)) / range
            : 0
        )
        .reduce((a, b) => a + b, 0) / 4
    );
  }
};

export default squareDogleggedLine;
