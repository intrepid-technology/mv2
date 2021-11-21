// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DashboardLineIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 2048 2048"}
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
          "M2048 0v2048H0V0h2048zm-128 128h-640v512h640V128zm-640 1152h640V768h-640v512zM128 128v1152h1024V128H128zm0 1792h640v-512H128v512zm1792 0v-512H896v512h1024z"
        }
      ></path>
    </svg>
  );
}

export default DashboardLineIcon;
/* prettier-ignore-end */
