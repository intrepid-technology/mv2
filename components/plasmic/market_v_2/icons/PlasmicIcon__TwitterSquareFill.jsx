// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TwitterSquareFillIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1792 2048"}
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
          "M1600 128H192C86 128 0 214 0 320v1408c0 106 86 192 192 192h1408c106 0 192-86 192-192V320c0-106-86-192-192-192zm-195.6 635.2c.8 11.2.8 22.8.8 34 0 346.8-264 746.4-746.4 746.4-148.8 0-286.8-43.2-402.8-117.6 21.2 2.4 41.6 3.2 63.2 3.2 122.8 0 235.6-41.6 325.6-112-115.2-2.4-212-78-245.2-182 40.4 6 76.8 6 118.4-4.8-120-24.4-210-130-210-257.6v-3.2c34.8 19.6 75.6 31.6 118.4 33.2a261.788 261.788 0 01-116.8-218.4c0-48.8 12.8-93.6 35.6-132.4C474.4 711.2 668.4 815.2 886 826.4c-37.2-178 96-322.4 256-322.4 75.6 0 143.6 31.6 191.6 82.8 59.2-11.2 116-33.2 166.4-63.2-19.6 60.8-60.8 112-115.2 144.4 52.8-5.6 104-20.4 151.2-40.8-35.6 52.4-80.4 98.8-131.6 136z"
        }
      ></path>
    </svg>
  );
}

export default TwitterSquareFillIcon;
/* prettier-ignore-end */
