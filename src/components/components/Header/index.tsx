/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useTheme } from "@katachi/style";

export interface Props {
  className?: string;
  hidden?: boolean;
}

const Header: React.FC<Props> = ({ className, hidden }) => {
  const theme = useTheme();

  return hidden ? null : (
    <div
      css={css`
        font-size: 1.2rem;
        padding: 0 1em;
        color: ${theme.accent};
        height: 2em;
        line-height: 2em;
        font-weight: bold;
        text-align: center;
      `}
      className={className}
    >
      katachi
    </div>
  );
};

export default Header;
