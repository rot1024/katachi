/** @jsx jsx */
import React, { useCallback, useState, Fragment } from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { TrainingType, Level } from "@katachi/training";

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

const Menu: React.FC<Props> = ({ className, onSelect }) => {
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

const MenuItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  vertical-align: middle;
  user-select: none;
  padding: 10px;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    background-color: #ccc;
  }
`;

export default Menu;
