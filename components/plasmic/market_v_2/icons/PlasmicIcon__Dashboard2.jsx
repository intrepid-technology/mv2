// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Dashboard2Icon(props) {
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
          "M16 6C9.383 6 4 11.383 4 18a11.93 11.93 0 002.75 7.625l.281.375H24.97l.281-.375A11.93 11.93 0 0028 18c0-6.617-5.383-12-12-12zm0 2c5.535 0 10 4.465 10 10 0 2.266-.793 4.324-2.063 6H8.063C6.793 22.324 6 20.266 6 18c0-5.535 4.465-10 10-10zm0 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4 1.063c-.55 0-1 .449-1 1 0 .55.45 1 1 1s1-.45 1-1c0-.551-.45-1-1-1zm8 0c-.55 0-1 .449-1 1 0 .55.45 1 1 1s1-.45 1-1c0-.551-.45-1-1-1zM9.062 13c-.55 0-1 .45-1 1s.45 1 1 1c.551 0 1-.45 1-1s-.449-1-1-1zm13.594.031L17 16.281A1.984 1.984 0 0016 16a1.999 1.999 0 100 4 2 2 0 002-1.969V18l5.656-3.219zM8 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm16 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM9.062 21c-.55 0-1 .45-1 1s.45 1 1 1c.551 0 1-.45 1-1s-.449-1-1-1zm13.876 0c-.551 0-1 .45-1 1s.449 1 1 1c.55 0 1-.45 1-1s-.45-1-1-1z"
        }
      ></path>
    </svg>
  );
}

export default Dashboard2Icon;
/* prettier-ignore-end */
