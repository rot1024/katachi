import React from "react";
import { TrainingType } from "@katachi/training";

export { TrainingType };

export interface Props {
  className?: string;
  type: TrainingType;
  scores: number[];
}

const TrainingResult: React.FC<Props> = ({ className, scores, type }) => {
  return (
    <div className={className}>
      <h1>{type}</h1>
      <ul>
        {scores.map((s, i) => (
          <li>
            {i}: {s}
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default TrainingResult;
