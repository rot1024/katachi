// training
export const baseLength = 300;
export const calcLength = (ratio: number, scaleCorrection: number) =>
  ratio * baseLength * scaleCorrection;

// style
// export const bottomMargin = 100;
export const strokeWidth = 3;
export const calcRectX = (w: number, screenSize: number) =>
  (screenSize - w) / 2;
export const calcRectY = (h: number, screenSize: number) =>
  (screenSize - h) / 2;
export const calcAnswer = (w: number, h: number, screenSize: number) =>
  calcRectY(h, screenSize) + h - w;
