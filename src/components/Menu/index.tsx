/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import { useTheme } from "@katachi/style";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface MenuItem {
  id: string;
  label: string;
  icon?: IconProp;
  iconColor?: string;
}

export interface Props {
  className?: string;
  items?: MenuItem[];
  onSelect?: (id: string) => void;
}

const Menu: React.FC<Props> = ({ className, items, onSelect }) => {
  const theme = useTheme();

  const handleSelect = (id: string) => () => {
    if (onSelect) {
      onSelect(id);
    }
  };
  const iconShown = items && items.some(i => !!i.icon);

  return (
    <ul
      className={className}
      css={css`
        margin: 0;
        padding: 0;
        background-color: #fff;
      `}
    >
      {items &&
        items.map(item => (
          <li
            css={css`
              display: block;
              padding: 0.8em 1em 0.8em ${iconShown && item.icon ? "3em" : "1em"};
              user-select: none;
              cursor: pointer;
              position: relative;
              transition: all ease 0.1s;
              font-size: 0.9rem;
              border-top: 1px solid #efefef;

              &:after {
                content: ">";
                float: right;
                color: ${theme.accent};
                font-size: 0.9rem;
              }

              &:active:after {
                color: #fff;
              }

              &:active {
                background-color: ${theme.accent};
                color: #fff;
              }
            `}
            key={item.id}
            onClick={handleSelect(item.id)}
          >
            {item.icon && (
              <FontAwesomeIcon
                color={item.iconColor}
                icon={item.icon}
                css={css`
                  margin-top: -0.1em;
                  margin-right: 0.7em;
                  font-size: 1.2em;
                  vertical-align: middle;
                `}
              />
            )}
            {item.label}
          </li>
        ))}
    </ul>
  );
};

export default Menu;
