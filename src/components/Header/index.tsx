/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useTheme } from "@katachi/style";

export interface Props {
  className?: string;
  hidden?: boolean;
  closable?: boolean;
  onClose?: () => void;
}

const Header: React.FC<Props> = ({ className, hidden, closable, onClose }) => {
  const theme = useTheme();

  return hidden ? null : (
    <div
      css={css`
        font-size: 1.2rem;
        padding: 0 1em;
        color: ${theme.accent};
        height: 3em;
        line-height: 3em;
        font-weight: bold;
        text-align: center;
      `}
      className={className}
    >
      katachi
      {closable && (
        <div
          css={css`
            width: 3em;
            height: 3em;
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            user-select: none;
            text-align: center;
            line-height: 3em;
            color: #888;
          `}
          onClick={onClose}
        >
          &times;
        </div>
      )}
    </div>
  );
};

export default Header;
