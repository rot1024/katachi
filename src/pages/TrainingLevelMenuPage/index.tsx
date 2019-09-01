/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

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
    <div
      className={className}
      css={css`
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      <TrainingLevelMenu onSelect={onSelect} />
    </div>
  );
};

export default TrainingLevelMenuPage;
