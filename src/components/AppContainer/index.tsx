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
  headerClosable?: boolean;
  onHeaderClose?: () => void;
  headerBackButtonVisible?: boolean;
  onHeaderBackButtonClick?: () => void;
}

const AppContainer: React.FC<Props> = ({
  className,
  children,
  currentMode,
  navHidden,
  onModeChange,
  headerClosable,
  onHeaderClose,
  headerBackButtonVisible,
  onHeaderBackButtonClick
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
        <Header
          closable={headerClosable}
          onClose={onHeaderClose}
          backButtonVisible={headerBackButtonVisible}
          onBackButtonClick={onHeaderBackButtonClick}
        />
      </header>
      <main
        role="main"
        css={css`
          position: relative;
          flex: auto;
          overflow: hidden;
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
