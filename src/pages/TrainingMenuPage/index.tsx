/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import TrainingMenu, {
  TrainingType,
  Level
} from "@katachi/components/components/TrainingMenu";
export { TrainingType, Level };

export interface Props {
  className?: string;
  onSelect?: (type: TrainingType, level: Level) => void;
}

const TrainingPageMenu: React.FC<Props> = ({ className, onSelect }) => {
  return (
    <div className={className}>
      <TrainingMenu onSelect={onSelect} />
    </div>
  );
};

export default TrainingPageMenu;
