/** @jsx jsx */
import React, { useCallback } from "react";
import { jsx } from "@emotion/core";

import { styled } from "@katachi/style";
import { TrainingType, allTrainingTypes, getTitle } from "@katachi/lib";

export { TrainingType };

export interface Props {
  className?: string;
  onSelect?: (type: TrainingType) => void;
}

const TrainingMenu: React.FC<Props> = ({ className, onSelect }) => {
  const handleTypeClick = useCallback(
    (type: TrainingType) => (onSelect ? () => onSelect(type) : undefined),
    [onSelect]
  );

  return (
    <div className={className}>
      {allTrainingTypes().map(type => (
        <MenuItem key={type} onClick={handleTypeClick(type)}>
          {getTitle(type)}
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

export default TrainingMenu;
