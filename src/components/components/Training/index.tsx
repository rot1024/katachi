import React, { useCallback } from "react";

import { TrainingType } from "@katachi/training";
import { TrainingProps } from "./common";
import VerticalLine from "./VerticalLine";

export { TrainingType };

export interface Props {
  className?: string;
  type: TrainingType;
  params: number[];
  state?: number[];
  isAnswerShown?: boolean;
  disableOperation?: boolean;
  screenSize: number;
  scaleCorrection?: number;
  onUpdate?: (state: number[]) => void;
}

const getTrainingComponent = (
  t: TrainingType
): React.FC<TrainingProps> | undefined => {
  switch (t) {
    case TrainingType.VerticalLine2:
      return VerticalLine;
  }
  return undefined;
};

const Training: React.FC<Props> = props => {
  const { onUpdate } = props;
  const handleUpdate = useCallback(
    (s: number[]) => {
      if (onUpdate) {
        onUpdate(s);
      }
    },
    [onUpdate]
  );

  const Component = getTrainingComponent(props.type);

  if (!Component) return null;
  return <Component {...props} onUpdate={handleUpdate} />;
};

export default Training;
