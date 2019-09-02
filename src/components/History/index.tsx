/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import { TrainingHistory, getTitle, humanReadableScore } from "@katachi/lib";
import Rating from "../Rating";

export interface Props {
  className?: string;
  histories?: TrainingHistory[];
}

const History: React.FC<Props> = ({ className, histories }) => {
  return (
    <div
      className={className}
      css={css`
        background-color: #fff;
      `}
    >
      {histories &&
        histories.map(h => {
          const score = h.scores.reduce((a, b) => a + b, 0) / h.scores.length;
          return (
            <div
              key={h.datetime.toISOString()}
              css={css`
                padding: 0.5em 1em;
                font-size: 0.9rem;
                border-top: 1px solid #efefef;
                display: flex;
                align-items: center;

                &:first-child {
                  border-top: none;
                }
              `}
            >
              <div css={css``}>{h.datetime.toLocaleString()}</div>
              <div
                css={css`
                  margin-left: 1em;
                `}
              >
                {getTitle(h.type)}
              </div>
              <div
                css={css`
                  margin-left: 1em;
                `}
              >
                {h.level}
              </div>
              <div
                css={css`
                  margin-left: 1em;
                `}
              >
                {humanReadableScore(score)}点
              </div>
              <div css={css``}>
                <Rating small score={score} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default History;
