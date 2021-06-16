// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebookSquareFillIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
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
          "M455.27 32H56.73A24.74 24.74 0 0032 56.73v398.54A24.74 24.74 0 0056.73 480H256V304h-53.55v-64H256v-51c0-57.86 40.13-89.36 91.82-89.36 24.73 0 51.33 1.86 57.51 2.68v60.43h-41.18c-28.12 0-33.48 13.3-33.48 32.9V240h67l-8.75 64h-58.25v176h124.6A24.74 24.74 0 00480 455.27V56.73A24.74 24.74 0 00455.27 32z"
        }
      ></path>
    </svg>
  );
}

export default FacebookSquareFillIcon;
/* prettier-ignore-end */
