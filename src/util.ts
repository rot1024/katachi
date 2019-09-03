export const clamp = (v: number, min: number, max: number) =>
  v > max ? max : v < min ? min : v;

export const numberArrayEqual = (a: number[], b: number[]) =>
  a.length === b.length && a.every((c, i) => c === b[i]);

export const updateArray = <T>(a: T[], i: number, val: T) => [
  ...a.slice(0, i),
  val,
  ...a.slice(i + 1)
];
