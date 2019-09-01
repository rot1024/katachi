/** @jsx jsx */
import React, { useCallback } from "react";
import { jsx } from "@emotion/core";

import { styled } from "@katachi/style";
import { Level } from "@katachi/lib";

export { Level };

const levels: [Level, string][] = [
  [Level.Easy, "Easy"],
  [Level.Normal, "Normal"],
  [Level.Hard, "Hard"],
  [Level.Ultimate, "Ultimate"]
];

export interface Props {
  className?: string;
  onSelect?: (level: Level) => void;
}

const TrainingLevelMenu: React.FC<Props> = ({ className, onSelect }) => {
  const handleLevelClick = useCallback(
    (level: Level) => (onSelect ? () => onSelect(level) : undefined),
    [onSelect]
  );

  return (
    <div className={className}>
      {levels.map(([level, label]) => (
        <MenuItem key={level} onClick={handleLevelClick(level)}>
          {label}
        </MenuItem>
      ))}
    </div>
  );
};

const MenuItem = styled.div<{ bgcolor?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  max-height: 200px;
  width: calc(50vw - 0.6em);
  height: calc(50vw - 0.6em);
  vertical-align: middle;
  user-select: none;
  border-radius: 0.5em;
  box-shadow: 0 0.1em 0.5em #00000030;
  cursor: pointer;
  transition: all ease 0.1s;
  background-color: ${({ bgcolor }) => bgcolor || "#bbb"};
  color: #fff;
  box-sizing: border-box;
  margin: 0.3em;

  &:hover {
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(100%);
    transform: translateY(1px);
  }
`;

export default TrainingLevelMenu;
