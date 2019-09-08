import { TrainingMenu, Level } from "./common";

const squareHorizontalLine: TrainingMenu = {
  title: "正方形と水平線",
  paramsSize: 2,
  stateSize: 1,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 10000,
    [Level.Hard]: 3000,
    [Level.Ultimate]: 1000
  },
  validateParams: ([s, r]) => s > 0.2 && r > 0.1 && r < 0.9,
  judgeScore: (params, state) => {
    if (params[1] === 0 || !state || typeof state[0] !== "number") return 0;
    const range = 0.25 - 0.1 * params[0];
    return state
      ? 1 - Math.min(range, Math.abs(params[1] - (state[0] as number))) / range
      : 0;
  }
};

export default squareHorizontalLine;
