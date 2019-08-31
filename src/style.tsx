import React, { FC, useContext } from "react";
import { Global, css, ThemeContext } from "@emotion/core";
import emotionStyled, { CreateStyled } from "@emotion/styled";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShapes,
  faChartLine,
  faSlidersH
} from "@fortawesome/free-solid-svg-icons";

library.add(faShapes, faChartLine, faSlidersH);

export const theme = {
  accent: "tomato",
  inactive: "#aaa"
};

const globalCSS = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const styled = emotionStyled as CreateStyled<typeof theme>;
export const useTheme = () => useContext<typeof theme>(ThemeContext as any);
export const ThemeProvider: FC = ({ children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);
export const GlobalStyle: FC = () => <Global styles={globalCSS} />;
