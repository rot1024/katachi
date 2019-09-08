import { TrainingMenu, Level } from "./common";
import { distance } from "@katachi/util";

const squareDogleggedLine: TrainingMenu = {
  title: "正方形とくの字",
  paramsSize: 4,
  stateSize: 4,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 40000,
    [Level.Hard]: 15000,
    [Level.Ultimate]: 5000
  },
  validateParams: ([top, bottom, x, y]) =>
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
    if (!state) return 0;
    const range = 0.2;

    const pointScore =
      typeof state[2] !== "number" || typeof state[3] !== "number"
        ? 0
        : 1 -
          Math.min(range, distance(state[2], state[3], params[2], params[3])) /
            range;

    return (
      state
        .slice(0, 2)
        .map((s, i) =>
          typeof s === "number"
            ? 1 - Math.min(range, Math.abs(params[i] - s)) / range
            : 0
        )
        .concat([pointScore, pointScore])
        .reduce((a, b) => a + b, 0) / 4
    );
  }
};

export default squareDogleggedLine;
