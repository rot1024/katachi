import React, { useState, useCallback } from "react";

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
        <Timer
          duration={duration}
          enabled
          onTimeUp={onStart}
          displayStyle={DisplayStyle.Text}
        />
      ) : (
        <>
          <div>トレーニングを始める</div>
          <Button onClick={handleClick}>START</Button>
        </>
      )}
    </div>
  );
};

export default TrainingStart;
