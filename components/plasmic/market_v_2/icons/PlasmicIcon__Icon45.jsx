// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon45Icon(props) {
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
        "feather feather-briefcase"
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

      <rect x={"2"} y={"7"} width={"20"} height={"14"} rx={"2"} ry={"2"}></rect>

      <path d={"M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"}></path>
    </svg>
  );
}

export default Icon45Icon;
/* prettier-ignore-end */
