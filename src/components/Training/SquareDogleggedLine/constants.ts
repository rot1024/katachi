// training
export const minlength = 110;
export const baseLength = 40;
export const calcLength = (ratio: number, scaleCorrection: number) =>
  ratio * baseLength * scaleCorrection + minlength;

// style
export const margin = 20;
export const padding = 20;
export const strokeWidth = 3;
