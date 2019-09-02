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
  VerticalLine1 = "verticalLine1",
  VerticalLine2 = "verticalLine2"
  // HorizontalLine1 = "horizontailLine1",
  // HorizontalLine2 = "horizontalLine2",
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
  level: Level;
  type: TrainingType;
  params: number[][];
  state: number[][];
  scores: number[];
}
