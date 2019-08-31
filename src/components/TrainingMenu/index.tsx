/** @jsx jsx */
import React, { useCallback, useState, Fragment } from "react";
import { jsx } from "@emotion/core";
import { styled } from "@katachi/style";

import { TrainingType, Level } from "@katachi/training";

export { TrainingType, Level };

const types: ([TrainingType, string])[] = [
  [TrainingType.VerticalLine2, "垂直な棒の比率"]
];
const levels: [Level, string][] = [
  [Level.Easy, "Easy"],
  [Level.Normal, "Normal"],
  [Level.Hard, "Hard"],
  [Level.Ultimate, "Ultimate"]
];

export interface Props {
  className?: string;
  onSelect?: (type: TrainingType, level: Level) => void;
}

const TrainingMenu: React.FC<Props> = ({ className, onSelect }) => {
  const [selectedType, selectType] = useState<TrainingType>();

  const handleTypeClick = useCallback(
    (type?: TrainingType) => () => {
      console.log("ok");
      selectType(type);
    },
    []
  );

  const handleLevelClick = useCallback(
    (level: Level) => () => {
      if (onSelect && selectedType) {
        onSelect(selectedType, level);
      }
    },
    [onSelect, selectedType]
  );

  return (
    <div className={className}>
      {typeof selectedType === "undefined" ? (
        types.map(([type, label]) => (
          <MenuItem key={type} onClick={handleTypeClick(type)}>
            {label}
          </MenuItem>
        ))
      ) : (
        <Fragment>
          <MenuItem onClick={handleTypeClick()}>Back</MenuItem>
          {levels.map(([level, label]) => (
            <MenuItem key={level} onClick={handleLevelClick(level)}>
              {label}
            </MenuItem>
          ))}
        </Fragment>
      )}
    </div>
  );
};

const MenuItem = styled.div<{ bgcolor?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  max-height: 200px;
  width: 50vw;
  height: 50vw;
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
