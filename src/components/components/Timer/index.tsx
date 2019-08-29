import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";

export interface Props {
  className?: string;
  duration?: number;
  enabled?: boolean;
  onTimeUp?: () => void;
  id?: number;
}

const Timer: React.FC<Props> = ({
  className,
  duration,
  onTimeUp,
  id,
  enabled
}) => {
  const [ratio, setRatio] = useState(0);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;

  useEffect(() => {
    if (!enabled || !duration) return;
    setRatio(0);
    const start = Date.now();
    const time = setInterval(() => {
      const r = Math.min((Date.now() - start) / duration, 1);
      setRatio(r);
      if (r === 1) {
        clearInterval(time);
        if (onTimeUpRef.current) {
          onTimeUpRef.current();
        }
      }
    }, 17);
    return () => clearInterval(time);
  }, [duration, enabled, id]);

  return (
    <Wrapper className={className}>{duration && <Bar ratio={ratio} />}</Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
const Bar = styled.div<{ ratio: number }>`
  width: ${({ ratio }) => (1 - ratio) * 100}%;
  height: 3px;
  background-color: red;
`;

export default Timer;
