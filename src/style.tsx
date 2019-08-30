import React, { FC, useContext } from "react";
import { Global, css, ThemeContext } from "@emotion/core";
import emotionStyled, { CreateStyled } from "@emotion/styled";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShapes,
  faChartLine,
  faSlidersH
} from "@fortawesome/free-solid-svg-icons";

library.add(faShapes, faChartLine, faSlidersH);

export const theme = {
  accent: "tomato"
};

export const GlobalStyle: FC = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }

      .App {
        text-align: center;
      }

      .App-logo {
        animation: App-logo-spin infinite 20s linear;
        height: 40vmin;
        pointer-events: none;
      }

      .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }

      .App-link {
        color: #61dafb;
      }

      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}
  />
);

export const styled = emotionStyled as CreateStyled<typeof theme>;

export const useTheme = () => useContext<typeof theme>(ThemeContext as any);
