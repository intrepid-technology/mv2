// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function _001CarsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
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

      <g data-name={"13-car"}>
        <path
          d={
            "M120 236a52 52 0 1052 52 52.059 52.059 0 00-52-52zm0 76a24 24 0 1124-24 24 24 0 01-24 24zm288-76a52 52 0 1052 52 52.059 52.059 0 00-52-52zm0 76a24 24 0 1124-24 24 24 0 01-24 24z"
          }
        ></path>

        <path
          d={
            "M477.4 193.04L384 176l-79.515-65.975A44.109 44.109 0 00276.526 100H159.38a43.785 43.785 0 00-34.359 16.514L74.232 176H40a36.04 36.04 0 00-36 36v44a44.049 44.049 0 0044 44h9.145a64 64 0 11125.71 0h162.29a64 64 0 11125.71 0H472a36.04 36.04 0 0036-36v-35.368a35.791 35.791 0 00-30.6-35.592zM180 164a12 12 0 01-12 12h-52.755a6 6 0 01-4.563-9.9l34.916-40.9a12 12 0 019.126-4.2H168a12 12 0 0112 12zm60 56h-16a12 12 0 010-24h16a12 12 0 010 24zm94.479-43.706l-114.507-.266a12 12 0 01-11.972-12V133a12 12 0 0112-12h57.548a12 12 0 017.433 2.58l53.228 42a6 6 0 01-3.73 10.714z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default _001CarsvgIcon;
/* prettier-ignore-end */
