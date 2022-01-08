// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function OfficeWork2Icon(props) {
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
          "M4 3v26h11v-4h2v4h11V3zm2 2h20v22h-7v-4h-6v4H6zm2 2v2h4V7zm6 0v2h4V7zm6 0v2h4V7zM8 11v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 15v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 19v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 23v2h4v-2zm12 0v2h4v-2z"
        }
      ></path>
    </svg>
  );
}

export default OfficeWork2Icon;
/* prettier-ignore-end */
