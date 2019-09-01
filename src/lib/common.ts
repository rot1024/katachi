export interface TrainingMenu {
  title: string;
  paramsSize: number;
  stateSize: number;
  duration: { [key in Level]: number };
  validateParams: (params: number[]) => number[] | boolean;
  judgeScore: (params: number[], state?: number[]) => number;
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
  VerticalLine2 = "verticalLine2"
  // VerticalLine3 = "verticalLine3",
  // HorizontalLine2 = "horizontailLine2",
  // HorizontalLine3 = "horizontalLine3",
  // Square = "square",
  // SquareVerticalLine = "squareVerticalLine",
  // SquareSkewedLine = "squareSkewedLine",
  // SquareDogleggedLine = "squareDogleggedLine",
  // SquareTriangle = "squareTriangle",
  // SquarePoint = "squarePoint",
  // Ellipse = "ellipse",
  // EllipseMultiple = "ellipseMultiple"
}

export interface TrainingHistory {
  datetime: Date;
  type: TrainingType;
  params: number[][];
  state: number[][];
  scores: number[];
}
