/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Menu from "@katachi/components/components/Menu";

export enum Item {
  ScaleCorrection = "scalecorrection",
  SignOut = "signout"
}

export interface Props {
  className?: string;
  onSelect?: (item: Item) => void;
}

const items = [
  { id: Item.ScaleCorrection, label: "スクリーンサイズの補正" },
  { id: Item.SignOut, label: "ログアウト" }
];

const SettingPage: React.FC<Props> = ({ className, onSelect }) => {
  return (
    <div
      className={className}
      css={css`
        background-color: #efefef;
      `}
    >
      <Menu
        items={items}
        onSelect={id => {
          if (onSelect) {
            onSelect(id as Item);
          }
        }}
      />
    </div>
  );
};

export default SettingPage;
