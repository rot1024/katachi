import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";

export enum DisplayStyle {
  Bar,
  Text
}

export interface Props {
  className?: string;
  duration?: number;
  enabled?: boolean;
  onTimeUp?: () => void;
  id?: number;
  displayStyle?: DisplayStyle;
}

const Timer: React.FC<Props> = ({
  className,
  duration,
  onTimeUp,
  id,
  enabled,
  displayStyle = DisplayStyle.Bar
}) => {
  const [ratio, setRatio] = useState(0);
  const [seconds, setSeconds] = useState(duration ? ~~(duration / 1000) : 0);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;

  useEffect(() => {
    if (!enabled || !duration) return;
    setRatio(0);
    setSeconds(0);
    const start = Date.now();
    const time = setInterval(() => {
      const r = Math.min((Date.now() - start) / duration, 1);
      setRatio(r);
      setSeconds(Math.ceil((duration - (Date.now() - start)) / 1000));
      if (r === 1) {
        clearInterval(time);
        if (onTimeUpRef.current) {
          onTimeUpRef.current();
        }
      }
    }, 17);
    return () => clearInterval(time);
  }, [duration, enabled, id]);

  return displayStyle === DisplayStyle.Bar ? (
    <BarWrapper className={className}>
      {duration && <Bar ratio={ratio} />}
    </BarWrapper>
  ) : (
    <TextWrapper className={className}>{seconds}</TextWrapper>
  );
};

const BarWrapper = styled.div`
  width: 100%;
`;
const Bar = styled.div<{ ratio: number }>`
  width: ${({ ratio }) => (1 - ratio) * 100}%;
  height: 3px;
  background-color: red;
`;

const TextWrapper = styled.div`
  font-size: 4rem;
  width: 2em;
  padding: 0.2em 0.4em;
  display: inline-block;
  text-align: center;
`;

export default Timer;
