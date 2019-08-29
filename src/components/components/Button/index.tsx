import React from "react";
import styled from "@emotion/styled";

export interface Props {
  className?: string;
  children?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children ? children.toUpperCase() : ""}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  border-radius: 0.5em;
  border: none;
  outline: none;
  background-color: red;
  color: #fff;
  padding: 1em 3em;
  box-shadow: 0 0.1em 0.5em #00000030;
  cursor: pointer;
  transition: all ease 0.1s;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(100%);
    transform: translateY(1px);
  }
`;

export default Button;
