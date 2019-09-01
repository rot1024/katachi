import React from "react";
import { TrainingType, getTitle, humanReadableScore } from "@katachi/lib";

import Rating from "../Rating";

export { TrainingType };

export interface Props {
  className?: string;
  type: TrainingType;
  scores: number[];
}

const TrainingResult: React.FC<Props> = ({ className, scores, type }) => {
  const totalScore =
    scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  return (
    <div className={className}>
      <h1>{getTitle(type)}</h1>
      <p>
        Total: {humanReadableScore(totalScore)} <Rating score={totalScore} />
      </p>
      <ul>
        {scores.map((s, i) => (
          <li key={i}>
            <span>
              {i + 1}: {humanReadableScore(s)}
            </span>
            <Rating small score={s} />
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default TrainingResult;
