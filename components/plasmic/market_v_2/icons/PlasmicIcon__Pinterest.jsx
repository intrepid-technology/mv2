// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PinterestIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
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
          "M24.001 0C10.748 0 0 10.745 0 24.001c0 9.825 5.91 18.27 14.369 21.981-.068-1.674-.012-3.689.415-5.512.462-1.948 3.087-13.076 3.087-13.076s-.765-1.533-.765-3.799c0-3.556 2.064-6.212 4.629-6.212 2.182 0 3.237 1.64 3.237 3.604 0 2.193-1.4 5.476-2.12 8.515-.6 2.549 1.276 4.623 3.788 4.623 4.547 0 7.61-5.84 7.61-12.76 0-5.258-3.543-9.195-9.986-9.195-7.279 0-11.815 5.427-11.815 11.49 0 2.094.616 3.567 1.581 4.708.446.527.505.736.344 1.34-.113.438-.378 1.505-.488 1.925-.16.607-.652.827-1.2.601-3.355-1.369-4.916-5.04-4.916-9.17 0-6.816 5.75-14.995 17.152-14.995 9.164 0 15.195 6.636 15.195 13.75 0 9.416-5.233 16.45-12.952 16.45-2.588 0-5.026-1.4-5.862-2.99 0 0-1.394 5.53-1.688 6.596-.508 1.85-1.504 3.7-2.415 5.14 2.159.638 4.44.985 6.801.985C37.255 48 48 37.255 48 24.001 48 10.745 37.255 0 24.001 0"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default PinterestIcon;
/* prettier-ignore-end */