/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import ScaleCorrector from "@katachi/components/ScaleCorrector";

export interface Props {
  className?: string;
  scaleCorrection?: number;
  onScaleCorrectionEnter?: (sc: number) => void;
}

const ScaleCorrectionPage: React.FC<Props> = ({
  className,
  scaleCorrection,
  onScaleCorrectionEnter
}) => {
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
        padding: 1em;
      `}
    >
      <ScaleCorrector
        scaleCorrection={scaleCorrection}
        onEnter={onScaleCorrectionEnter}
      />
    </div>
  );
};

export default ScaleCorrectionPage;
