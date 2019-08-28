import { TrainingMenu } from "./common";

const verticalLine2: TrainingMenu = {
  paramsSize: 3,
  stateSize: 1,
  validateParams: params => true,
  judgeScore: (params, state) =>
    Math.max(100, Math.abs(params[2] - state[1])) / 100
};

export default verticalLine2;
