import { TrainingMenu, Level } from "./common";
import { distance } from "@katachi/util";

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
    if (!state || typeof state[0] !== "number" || typeof state[1] !== "number")
      return 0;
    const range = 0.2;
    const dist = distance(state[0], state[1], params[0], params[1]);
    return 1 - Math.min(range, dist) / range;
  }
};

export default squarePoint;
