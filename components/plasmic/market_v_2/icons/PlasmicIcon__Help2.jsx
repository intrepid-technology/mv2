// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Help2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"1.5"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "feather feather-help-circle"
      )}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"12"} cy={"12"} r={"10"}></circle>

      <path d={"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01"}></path>
    </svg>
  );
}

export default Help2Icon;
/* prettier-ignore-end */
