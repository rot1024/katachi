import { TrainingMenu, Level } from "./common";

const square: TrainingMenu = {
  title: "長方形を正方形に",
  paramsSize: 2,
  stateSize: 1,
  duration: {
    [Level.Easy]: Infinity,
    [Level.Normal]: 15000,
    [Level.Hard]: 4000,
    [Level.Ultimate]: 1000
  },
  validateParams: ([w, h]) => w > 0.2 && h > 0.2 && h - w > 0.3,
  judgeScore: (params, state) => {
    if (params[1] === 0) return 0;
    const range = 0.2 - 0.1 * params[1];
    const res = state
      ? 1 -
        Math.min(range, Math.abs(1 - params[0] / params[1] - state[0])) / range
      : 0;
    return res;
  }
};

export default square;
