import React from "react";
import { styled } from "@katachi/style";

import { getRating, Rating as RatingEnum } from "@katachi/lib";

export interface Props {
  className?: string;
  score: number;
  small?: boolean;
}

const styles: { [key in RatingEnum]: { color: string } } = {
  [RatingEnum.Legend]: { color: "red" },
  [RatingEnum.Excellent]: { color: "red" },
  [RatingEnum.Good]: { color: "red" },
  [RatingEnum.Bad]: { color: "red" }
};

const Rating: React.FC<Props> = ({ className, score, small }) => {
  const rating = getRating(score);
  return (
    <StyledSvg
      rating={rating}
      className={className}
      version="1.1"
      width={small ? 100 : 170}
      height={small ? 30 : 50}
      viewBox={small ? "0 0 100 30" : "0 0 170 50"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <filter id="inset-shadow">
          <feOffset dx="2" dy="3" />
          <feGaussianBlur stdDeviation="1" result="offset-blur" />
          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />
          <feFlood flood-color="black" flood-opacity="0.40" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </defs>
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="central"
        fontSize={small ? 16 : 24}
        fontWeight="bold"
        fill={styles[rating].color}
        stroke="#000"
        strokeWidth={1}
        filter="url(#inset-shadow)"
      >
        {rating.toUpperCase()}
      </text>
    </StyledSvg>
  );
};

const StyledSvg = styled.svg<{ rating: RatingEnum }>`
  display: inline-block;
`;

export default Rating;
