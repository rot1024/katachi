import React from "react";
import { styled } from "@katachi/style";

export interface Props {
  className?: string;
  color?: string;
  backgroundColor?: string;
}

const Card: React.FC<Props> = ({
  className,
  children,
  color,
  backgroundColor
}) => {
  return (
    <Wrapper
      className={className}
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ color?: string; backgroundColor?: string }>`
  border-radius: 0.5em;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  padding: 1em;
  box-shadow: 0 0.1em 0.3em #00000020;
  margin: 1em;
  box-sizing: border-box;
`;

export default Card;
