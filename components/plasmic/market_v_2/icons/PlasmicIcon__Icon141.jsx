// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon141Icon(props) {
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
          "M1195 1109l236 235-236 235-86-86 85-85H640v-128h554l-85-85zm-341 555h554v128H854l85 85-86 86-236-235 236-235 86 86zm408-979q91 37 165 97.5T1553.5 921t81.5 169.5 29 189.5h-128q0-105-40.5-198.5t-110-163-163-110T1024 768t-198.5 40.5-163 110-110 163T512 1280H384q0-98 29-189.5T494.5 921 621 782.5 786 685q-69-54-107.5-133.5T640 384q0-79 30.5-149T753 113t122-82.5T1024 0t149 30.5 122 82.5 82.5 122 30.5 149q0 88-38.5 167.5T1262 685zM768 384q0 53 20.5 99.5t55 81 81 55T1024 640q52 0 99-20.5t81.5-55 55-81T1280 384q0-52-20.5-99t-55-81.5-81.5-55-99-20.5q-53 0-99.5 20.5t-81 55-55 81.5-20.5 99z"
        }
      ></path>
    </svg>
  );
}

export default Icon141Icon;
/* prettier-ignore-end */
