/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import TrainingMenu, { TrainingType } from "@katachi/components/TrainingMenu";
export { TrainingType };

export interface Props {
  className?: string;
  onSelect?: (type: TrainingType) => void;
}

const TrainingMenuPage: React.FC<Props> = ({ className, onSelect }) => {
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
      <TrainingMenu onSelect={onSelect} />
    </div>
  );
};

export default TrainingMenuPage;
