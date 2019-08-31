/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";

import Button from "../Button";

export interface Props {
  className?: string;
  scaleCorrection?: number;
  onEnter?: (scaleCorrection: number) => void;
}

const basePixelLength = 150;
const baseCmLength = 3;

const ScaleCorrector: React.FC<Props> = ({
  className,
  scaleCorrection,
  onEnter
}) => {
  const [value, setValue] = useState(
    typeof scaleCorrection === "number" ? scaleCorrection : 50
  );
  useEffect(() => {
    if (typeof scaleCorrection === "number") {
      setValue(scaleCorrection);
    }
  }, [scaleCorrection]);
  const sc = value / 100 + 0.5;

  return (
    <div className={className}>
      <p
        css={css`
          text-align: center;
          margin: 0;
          padding: 2em 0;
        `}
      >
        棒の長さが {baseCmLength}cm になるように調整してください
      </p>
      <div
        css={css`
          padding: 5em 0;
        `}
      >
        <div
          css={css`
            width: ${basePixelLength * sc}px;
            height: 3px;
            background-color: #000;
            margin: 0 auto;
          `}
        />
      </div>
      <p
        css={css`
          text-align: center;
          margin: 0 0 5em 0;
        `}
      >
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={e => setValue(parseFloat(e.currentTarget.value))}
          css={css`
            width: 50%;
            min-width: 300px;
          `}
        />
      </p>
      <Button
        onClick={() => {
          if (onEnter) {
            onEnter(sc);
          }
        }}
      >
        OK
      </Button>
    </div>
  );
};

export default ScaleCorrector;
