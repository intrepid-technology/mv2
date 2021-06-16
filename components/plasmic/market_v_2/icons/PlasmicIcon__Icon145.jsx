// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon145Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 24 24"}
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
          "M14 8h1a1 1 0 000-2h-1a1 1 0 000 2zm0 4h1a1 1 0 000-2h-1a1 1 0 000 2zM9 8h1a1 1 0 000-2H9a1 1 0 000 2zm0 4h1a1 1 0 000-2H9a1 1 0 000 2zm12 8h-1V3a1 1 0 00-1-1H5a1 1 0 00-1 1v17H3a1 1 0 000 2h18a1 1 0 000-2zm-8 0h-2v-4h2zm5 0h-3v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H6V4h12z"
        }
      ></path>
    </svg>
  );
}

export default Icon145Icon;
/* prettier-ignore-end */
