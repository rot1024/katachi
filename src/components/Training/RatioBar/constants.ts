// training constants
export const baseLength = 200;
export const calcLength = (ratio: number, scaleCorrection: number) =>
  ratio * baseLength * scaleCorrection;

// style constants
export const whiskerLength = 40;
export const strokeWidth = 3;
export const clickablePaddingW = 200;
export const clickablePaddingH = 30;
