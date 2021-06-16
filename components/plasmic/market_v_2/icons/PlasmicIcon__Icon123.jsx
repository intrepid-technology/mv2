// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon123Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
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
          "M14 11h-1V7h2a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-2V3a1 1 0 00-2 0v2h-1a4 4 0 000 8h1v4H9a1 1 0 01-1-1 1 1 0 00-2 0 3 3 0 003 3h2v2a1 1 0 002 0v-2h1a4 4 0 000-8zm-3 0h-1a2 2 0 010-4h1zm3 6h-1v-4h1a2 2 0 010 4z"
        }
      ></path>
    </svg>
  );
}

export default Icon123Icon;
/* prettier-ignore-end */
