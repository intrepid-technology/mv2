// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon84Icon(props) {
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
          "M6 5v10H2v13h17v-4h11V11h-7V5H6zm2 2h13v4h-9v4H8V7zm6 6h14v9h-9v-7h-5v-2zm9 2v2h3v-2h-3zM4 17h13v1.113l-6.04 3.754a.877.877 0 01-.92 0L4 18.115V17zm13 3.469V26H4v-5.53l4.982 3.096c.468.291.994.438 1.518.438s1.049-.147 1.516-.44L17 20.47z"
        }
      ></path>
    </svg>
  );
}

export default Icon84Icon;
/* prettier-ignore-end */
