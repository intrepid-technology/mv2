// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon88Icon(props) {
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
          "M19 6.5h-3v-1a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3v-9a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1V13a21.27 21.27 0 003 .94v.59a1 1 0 002 0v-.21a23 23 0 003 .21 23 23 0 003-.21v.21a1 1 0 002 0v-.59a21.27 21.27 0 003-.94zm0-7.69a20.39 20.39 0 01-3 1v-.31a1 1 0 00-2 0v.74a20.11 20.11 0 01-6 0v-.74a1 1 0 00-2 0v.33a20.39 20.39 0 01-3-1V9.5a1 1 0 011-1h14a1 1 0 011 1z"
        }
      ></path>
    </svg>
  );
}

export default Icon88Icon;
/* prettier-ignore-end */
