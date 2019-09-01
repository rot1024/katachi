/** @jsx jsx */
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { css, jsx } from "@emotion/core";

import { GlobalStyle, ThemeProvider } from "./style";
import AppContainer, { Mode } from "./components/AppContainer";
import HomePage from "./pages/HomePage";
import { TrainingType, Level } from "./lib";
import TrainingMenuPage from "./pages/TrainingMenuPage";
import TrainingLevelMenuPage from "./pages/TrainingLevelMenuPage";
import TrainingPage from "./pages/TrainingPage";
import ReportPage from "./pages/ReportPage";
import SettingPage, { Item } from "./pages/SettingPage";
import ScaleCorrectionPage from "./pages/ScaleCorrectionPage";

enum Route {
  Home,
  TrainingMenu,
  TrainingLevel,
  Training,
  Report,
  Setting,
  ScaleCorrection
}

const App: React.FC = () => {
  const [currentRoute, jumpTo] = useState<Route>(Route.Home);
  const [scaleCorrection, setScaleCorrection] = useState(1);
  const [training, setTraining] = useState<[TrainingType, Level | undefined]>();

  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppContainer
        css={css`
          width: 100%;
          height: 100%;
        `}
        currentMode={
          currentRoute === Route.Training ||
          currentRoute === Route.TrainingMenu ||
          currentRoute === Route.TrainingLevel
            ? Mode.Training
            : currentRoute === Route.Report
            ? Mode.Report
            : currentRoute === Route.Setting
            ? Mode.Setting
            : undefined
        }
        navHidden={
          currentRoute === Route.Home || currentRoute === Route.Training
        }
        onModeChange={mode => {
          if (mode === Mode.Training) {
            jumpTo(Route.TrainingMenu);
          }
          if (mode === Mode.Report) {
            jumpTo(Route.Report);
          }
          if (mode === Mode.Setting) {
            jumpTo(Route.Setting);
          }
        }}
        headerClosable={currentRoute === Route.Training}
        onHeaderClose={() => {
          jumpTo(Route.TrainingMenu);
          setTraining(undefined);
        }}
        headerBackButtonVisible={
          currentRoute === Route.TrainingLevel ||
          currentRoute === Route.ScaleCorrection
        }
        onHeaderBackButtonClick={() => {
          if (currentRoute === Route.TrainingLevel) {
            jumpTo(Route.TrainingMenu);
          }
          if (currentRoute === Route.ScaleCorrection) {
            jumpTo(Route.Setting);
          }
        }}
      >
        {currentRoute === Route.Home && (
          <HomePage
            onSignIn={() => {
              jumpTo(Route.TrainingMenu);
            }}
          />
        )}
        {currentRoute === Route.TrainingMenu && (
          <TrainingMenuPage
            onSelect={type => {
              setTraining([type, undefined]);
              jumpTo(Route.TrainingLevel);
            }}
          />
        )}
        {currentRoute === Route.TrainingLevel && (
          <TrainingLevelMenuPage
            onSelect={level => {
              setTraining(s => (s ? [s[0], level] : undefined));
              jumpTo(Route.Training);
            }}
          />
        )}
        {currentRoute === Route.Training && training && training[1] && (
          <TrainingPage
            type={training[0]}
            level={training[1]}
            scaleCorrection={scaleCorrection}
            onFinish={() => {
              jumpTo(Route.TrainingMenu);
            }}
          />
        )}
        {currentRoute === Route.Report && <ReportPage />}
        {currentRoute === Route.Setting && (
          <SettingPage
            onSelect={mode => {
              if (mode === Item.ScaleCorrection) {
                jumpTo(Route.ScaleCorrection);
              }
              if (mode === Item.SignOut) {
                jumpTo(Route.Home);
              }
            }}
          />
        )}
        {currentRoute === Route.ScaleCorrection && (
          <ScaleCorrectionPage
            scaleCorrection={scaleCorrection}
            onScaleCorrectionEnter={sc => {
              setScaleCorrection(sc);
              jumpTo(Route.Setting);
            }}
          />
        )}
      </AppContainer>
    </ThemeProvider>
  );
};

export default hot(App);
