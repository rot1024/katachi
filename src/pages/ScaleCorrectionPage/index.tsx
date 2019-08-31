/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import ScaleCorrector from "@katachi/components/components/ScaleCorrector";

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
