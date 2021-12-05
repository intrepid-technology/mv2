// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WorkBriefIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 92 92"}
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
          "M90.8 22.9c-.7-.7-1.7-.9-2.8-.9H67V10c0-2.2-2-4-4.2-4H29.2C27 6 25 7.8 25 10v12H4c-2.2 0-4 1.3-4 3.5V82c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4V25.7c0-1.1-.4-2-1.2-2.8zM33 14h26v8H33v-8zm51 16v21H56v-1.5c0-1.7-1.6-2.5-3.3-2.5H39.3c-1.7 0-3.3.9-3.3 2.5V51H8V30h76zM50 53v2h-8v-2h8zM8 78V57h28v1c0 1.7 1.6 3 3.3 3h13.5c1.7 0 3.3-1.4 3.3-3v-1h28v21H8z"
        }
      ></path>
    </svg>
  );
}

export default WorkBriefIcon;
/* prettier-ignore-end */
