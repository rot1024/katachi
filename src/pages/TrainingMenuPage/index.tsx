/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import TrainingMenu, { TrainingType } from "@katachi/components/TrainingMenu";
export { TrainingType };

export interface Props {
  className?: string;
  onSelect?: (type: TrainingType) => void;
}

const TrainingMenuPage: React.FC<Props> = ({ className, onSelect }) => {
  return (
    <div className={className}>
      <TrainingMenu onSelect={onSelect} />
    </div>
  );
};

export default TrainingMenuPage;
