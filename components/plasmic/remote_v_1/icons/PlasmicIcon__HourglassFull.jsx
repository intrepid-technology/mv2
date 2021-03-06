// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HourglassFullIcon(props) {
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
          "M7 4v2h2v4a7.001 7.001 0 003.406 6A7.001 7.001 0 009 22v4H7v2h18v-2h-2v-4a7.001 7.001 0 00-3.406-6A7.001 7.001 0 0023 10V6h2V4zm4 2h10v4c0 2.773-2.227 5-5 5s-5-2.227-5-5zm1 2v2c0 2.21 1.79 4 4 4s4-1.79 4-4V8zm4 9c2.773 0 5 2.227 5 5v4H11v-4c0-2.773 2.227-5 5-5z"
        }
      ></path>
    </svg>
  );
}

export default HourglassFullIcon;
/* prettier-ignore-end */
