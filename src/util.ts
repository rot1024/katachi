export const clamp = (v: number, min: number, max: number) =>
  v > max ? max : v < min ? min : v;

export const numberArrayEqual = (a: number[], b: number[]) =>
  a.length === b.length && a.every((c, i) => c === b[i]);

export const updateArray = <T>(a: T[], i: number, val: T) => [
  ...(a.length >= i
    ? a.slice(0, i)
    : a.concat(new Array(i - a.length).fill(undefined))),
  val,
  ...a.slice(i + 1)
];

export const distance = (x: number, y: number, x2: number, y2: number) => {
  return Math.sqrt((x - x2) ** 2 + (y - y2) ** 2);
};
