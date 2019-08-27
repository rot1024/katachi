export const clamp = (v: number, min: number, max: number) =>
  v > max ? max : v < min ? min : v;
