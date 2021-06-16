// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon86Icon(props) {
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
          "M9.5 5C5.363 5 2 8.402 2 12.5c0 1.43.648 2.668 1.25 3.563a9.25 9.25 0 001.219 1.468L15.28 28.375l.719.719.719-.719L27.53 17.531S30 15.355 30 12.5C30 8.402 26.637 5 22.5 5c-3.434 0-5.645 2.066-6.5 2.938C15.145 7.066 12.934 5 9.5 5zm0 2c2.988 0 5.75 2.906 5.75 2.906l.75.844.75-.844S19.512 7 22.5 7c3.043 0 5.5 2.496 5.5 5.5 0 1.543-1.875 3.625-1.875 3.625L16 26.25 5.875 16.125s-.484-.465-.969-1.188C4.422 14.216 4 13.274 4 12.5 4 9.496 6.457 7 9.5 7z"
        }
      ></path>
    </svg>
  );
}

export default Icon86Icon;
/* prettier-ignore-end */
