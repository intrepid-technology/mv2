// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SearchFindIcon(props) {
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
          "M19 3C13.489 3 9 7.489 9 13c0 2.395.839 4.587 2.25 6.313L3.281 27.28l1.438 1.44 7.968-7.969A9.923 9.923 0 0019 23c5.511 0 10-4.489 10-10S24.511 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm0 3a4 4 0 00-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 00-4-4zm0 2a2 2 0 11.001 3.999A2 2 0 0119 10z"
        }
      ></path>
    </svg>
  );
}

export default SearchFindIcon;
/* prettier-ignore-end */