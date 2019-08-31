/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import Button from "@katachi/components/Button";

export interface Props {
  className?: string;
  onSignIn?: () => void;
}

const HomePage: React.FC<Props> = ({ className, onSignIn }) => {
  return (
    <div
      className={className}
      css={css`
        padding: 1em;
      `}
    >
      <h1>形を正確に観る "眼" を養うトレーニング</h1>
      <Button onClick={onSignIn}>Twitterでログイン</Button>
    </div>
  );
};

export default HomePage;
