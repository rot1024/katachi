import React from "react";
import { hot } from "react-hot-loader/root";

import { GlobalStyle, ThemeProvider } from "./style";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default hot(App);
