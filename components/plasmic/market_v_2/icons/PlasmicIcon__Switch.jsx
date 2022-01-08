// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SwitchIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.188 2.281L20.78 3.72 25.063 8H4v2h21.063l-4.282 4.281 1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719 1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
        }
      ></path>
    </svg>
  );
}

export default SwitchIcon;
/* prettier-ignore-end */
