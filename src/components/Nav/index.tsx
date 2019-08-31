import React from "react";
import { styled } from "@katachi/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum Mode {
  Training,
  Report,
  Setting
}

export interface Props {
  className?: string;
  selected?: Mode;
  onSelect?: (mode: Mode) => void;
}

const Nav: React.FC<Props> = ({ className, selected, onSelect }) => {
  return (
    <Wrapper className={className}>
      <MenuItem
        active={selected === Mode.Training}
        onClick={() => onSelect && onSelect(Mode.Training)}
      >
        <div>
          <Icon icon="shapes" />
          トレーニング
        </div>
      </MenuItem>
      <MenuItem
        active={selected === Mode.Report}
        onClick={() => onSelect && onSelect(Mode.Report)}
      >
        <div>
          <Icon icon="chart-line" />
          レポート
        </div>
      </MenuItem>
      <MenuItem
        active={selected === Mode.Setting}
        onClick={() => onSelect && onSelect(Mode.Setting)}
      >
        <div>
          <Icon icon="sliders-h" />
          設定
        </div>
      </MenuItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 4em;
`;

const MenuItem = styled.div<{ active?: boolean }>`
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ active, theme }) => (active ? theme.accent : theme.inactive)};
  flex: 1 1 0;
  user-select: none;
`;

const Icon = styled(FontAwesomeIcon)`
  display: block;
  margin: 0 auto 0.2em;
  font-size: 1.5rem;
`;

export default Nav;
