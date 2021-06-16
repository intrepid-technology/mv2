// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon138Icon(props) {
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
          "M19.89 9.55A1 1 0 0019 9h-5V3a1 1 0 00-.69-1 1 1 0 00-1.12.36l-8 11a1 1 0 00-.08 1A1 1 0 005 15h5v6a1 1 0 00.69.95A1.12 1.12 0 0011 22a1 1 0 00.81-.41l8-11a1 1 0 00.08-1.04zM12 17.92V14a1 1 0 00-1-1H7l5-6.92V10a1 1 0 001 1h4z"
        }
      ></path>
    </svg>
  );
}

export default Icon138Icon;
/* prettier-ignore-end */
