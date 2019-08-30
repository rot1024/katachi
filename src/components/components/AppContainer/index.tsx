/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import Header from "../Header";
import Nav, { Mode } from "../Nav";

export { Mode };

export interface Props {
  className?: string;
  navHidden?: boolean;
  currentMode?: Mode;
  onModeChange?: (mode: Mode) => void;
}

const AppContainer: React.FC<Props> = ({
  className,
  children,
  currentMode,
  navHidden,
  onModeChange
}) => {
  return (
    <div
      className={className}
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
      `}
    >
      <header>
        <Header />
      </header>
      <main
        role="main"
        css={css`
          flex: auto;
          overflow: hidden;
          overflow-y: auto;
        `}
      >
        {children}
      </main>
      <nav
        css={css`
          display: ${navHidden ? "none" : "block"};
        `}
      >
        <Nav selected={currentMode} onSelect={onModeChange} />
      </nav>
    </div>
  );
};

export default AppContainer;
