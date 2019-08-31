/** @jsx jsx */
import React from "react";
import { hot } from "react-hot-loader/root";
import { css, jsx } from "@emotion/core";

import { GlobalStyle, ThemeProvider } from "./style";
import AppContainer, { Mode } from "./components/components/AppContainer";
import TrainingPage, { TrainingType } from "./components/pages/TrainingPage";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppContainer
        css={css`
          width: 100%;
          height: 100%;
        `}
        currentMode={Mode.Training}
        onModeChange={(...args) => console.log("mode changed", ...args)}
      >
        <TrainingPage
          type={TrainingType.VerticalLine2}
          duration={10000}
          onFinish={(...args) => console.log("training finished", ...args)}
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default hot(App);
