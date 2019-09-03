export interface TrainingMenu {
  title: string;
  paramsSize: number;
  stateSize: number;
  duration: { [key in Level]: number };
  validateParams: (params: number[]) => number[] | boolean;
  judgeScore: (params: number[], state?: (number | undefined)[]) => number;
}

export enum Rating {
  Legend = "legend",
  Excellent = "excellent",
  Good = "good",
  Bad = "bad"
}

export enum Level {
  Easy = "easy",
  Normal = "normal",
  Hard = "hard",
  Ultimate = "ultimate"
}

export enum TrainingType {
  VerticalLine1 = "verticalLine1",
  VerticalLine2 = "verticalLine2",
  HorizontalLine1 = "horizontailLine1",
  HorizontalLine2 = "horizontalLine2",
  Square = "square",
  SquareVerticalLine = "squareVerticalLine",
  SquareSkewedLine = "squareSkewedLine",
  SquarePoint = "squarePoint"
  // SquareDogleggedLine = "squareDogleggedLine"
  // SquareTriangle = "squareTriangle",
  // Ellipse = "ellipse",
  // EllipseMultiple = "ellipseMultiple"
}

export interface TrainingHistory {
  datetime: Date;
  level: Level;
  type: TrainingType;
  params: number[][];
  state: number[][];
  scores: number[];
}
