// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InboxIcon(props) {
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
          "M7.156 5L7 5.844l-2 13V27h22v-8.156l-2-13L24.844 5zm1.719 2h14.25l1.688 11H18v1c0 1.117-.883 2-2 2s-2-.883-2-2v-1H7.187zM7 20h5.188c.453 1.71 1.964 3 3.812 3 1.848 0 3.36-1.29 3.813-3H25v5H7z"
        }
      ></path>
    </svg>
  );
}

export default InboxIcon;
/* prettier-ignore-end */
