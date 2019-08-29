// training constants
export const baseLength = 300;
export const whiskerLength = 20;
export const calcLength = (ratio: number, scaleCorrection: number) =>
  ratio * baseLength * scaleCorrection;

// style constants
export const strokeWith = 3;
export const clickablePadding = 30;
