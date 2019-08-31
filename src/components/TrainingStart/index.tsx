/** @jsx jsx */
import React, { useState, useCallback, Fragment } from "react";
import { css, jsx } from "@emotion/core";

import Button from "../Button";
import Timer, { DisplayStyle } from "../Timer";

export interface Props {
  className?: string;
  duration: number;
  onStart?: () => void;
}

const TrainingStart: React.FC<Props> = ({ className, duration, onStart }) => {
  const [buttonPushed, setButtonPushed] = useState(false);
  const handleClick = useCallback(() => {
    setButtonPushed(true);
  }, []);

  return (
    <div className={className}>
      {buttonPushed ? (
        <div
          css={css`
            text-align: center;
          `}
        >
          <Timer
            duration={duration}
            enabled
            onTimeUp={onStart}
            displayStyle={DisplayStyle.Text}
          />
        </div>
      ) : (
        <Fragment>
          <div>トレーニングを始める</div>
          <Button onClick={handleClick}>START</Button>
        </Fragment>
      )}
    </div>
  );
};

export default TrainingStart;
