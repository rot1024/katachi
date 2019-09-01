import React from "react";

import TrainingLevelMenu, {
  Level
} from "@katachi/components/TrainingLevelMenu";
export { Level };

export interface Props {
  className?: string;
  onSelect?: (level: Level) => void;
}

const TrainingLevelMenuPage: React.FC<Props> = ({ className, onSelect }) => {
  return (
    <div className={className}>
      <TrainingLevelMenu onSelect={onSelect} />
    </div>
  );
};

export default TrainingLevelMenuPage;
