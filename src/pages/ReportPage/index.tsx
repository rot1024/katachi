/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import { TrainingHistory } from "@katachi/lib";
import Calendar from "@katachi/components/Calendar";
import History from "@katachi/components/History";
import Chart from "@katachi/components/Chart";
import WeakPoint from "@katachi/components/WeakPoint";

export interface Props {
  className?: string;
  histories?: TrainingHistory[];
}

const ReportPage: React.FC<Props> = ({ className, histories }) => {
  return (
    <div
      className={className}
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f0f0f0;
        padding: 1em;
      `}
    >
      <History histories={histories} />
      <Calendar />
      <Chart />
      <WeakPoint />
    </div>
  );
};

export default ReportPage;
