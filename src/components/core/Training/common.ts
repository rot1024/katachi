export interface TrainingProps {
  className?: string;
  params: number[];
  state?: number[];
  isAnswerShown?: boolean;
  screenSize: number;
  scaleCorrection?: number;
  onUpdate?: (state: number[]) => void;
}
