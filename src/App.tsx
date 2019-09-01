/** @jsx jsx */
import React, { useState, useMemo, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { css, jsx } from "@emotion/core";

import { GlobalStyle, ThemeProvider } from "./style";
import AppContainer, { Mode } from "./components/AppContainer";
import HomePage from "./pages/HomePage";
import { TrainingType, Level } from "./lib";
import { clamp } from "./util";
import { useAuth, useHistories, AuthState } from "./db";
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
  ScaleCorrection,
  ScaleCorrectionFirst
}

const scaleCorrectionKey = "katachi.scaleCorrection";

const App: React.FC = () => {
  const initialScaleCorrection = useMemo(() => {
    const scstr = localStorage.getItem(scaleCorrectionKey);
    return scstr ? clamp(2, 0, parseFloat(scstr)) : undefined;
  }, []);
  const [scaleCorrection, setScaleCorrection] = useState(
    initialScaleCorrection || 1
  );
  const [training, setTraining] = useState<[TrainingType, Level | undefined]>();
  useEffect(() => {
    if (scaleCorrection) {
      localStorage.setItem(scaleCorrectionKey, scaleCorrection.toString());
    } else {
      localStorage.removeItem(scaleCorrectionKey);
    }
  }, [scaleCorrection]);

  const [user, signIn, signOut] = useAuth();
  const [histories, addHistory] = useHistories(
    typeof user === "string" ? user : undefined
  );
  const [currentRoute, jumpTo] = useState<Route>(Route.Home);
  useEffect(() => {
    if (typeof user === "string" && currentRoute === Route.Home) {
      jumpTo(
        initialScaleCorrection ? Route.TrainingMenu : Route.ScaleCorrectionFirst
      );
    }
  }, [currentRoute, initialScaleCorrection, user]);

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
            : currentRoute === Route.Setting ||
              currentRoute === Route.ScaleCorrection
            ? Mode.Setting
            : undefined
        }
        navHidden={
          currentRoute === Route.Home ||
          currentRoute === Route.Training ||
          currentRoute === Route.ScaleCorrectionFirst
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
        {currentRoute === Route.Home && user === AuthState.SignedOut && (
          <HomePage
            onSignIn={() => {
              signIn();
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
            onResult={h => {
              addHistory(h);
            }}
            onFinish={() => {
              jumpTo(Route.TrainingMenu);
            }}
          />
        )}
        {currentRoute === Route.Report && <ReportPage histories={histories} />}
        {currentRoute === Route.Setting && (
          <SettingPage
            onSelect={async mode => {
              if (mode === Item.ScaleCorrection) {
                jumpTo(Route.ScaleCorrection);
              }
              if (mode === Item.SignOut) {
                await signOut();
                jumpTo(Route.Home);
              }
            }}
          />
        )}
        {(currentRoute === Route.ScaleCorrection ||
          currentRoute === Route.ScaleCorrectionFirst) && (
          <ScaleCorrectionPage
            scaleCorrection={scaleCorrection}
            onScaleCorrectionEnter={sc => {
              setScaleCorrection(sc);
              if (currentRoute === Route.ScaleCorrectionFirst) {
                jumpTo(Route.TrainingMenu);
              } else {
                jumpTo(Route.Setting);
              }
            }}
          />
        )}
      </AppContainer>
    </ThemeProvider>
  );
};

export default hot(App);
