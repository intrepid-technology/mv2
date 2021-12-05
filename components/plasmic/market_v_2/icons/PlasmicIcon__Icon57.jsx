// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon57Icon(props) {
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
          "M2 7v18h28V7zm2 2h24v14H4zm2 2v2h10v-2zm16 0v1.063c-1.125.187-2 1.14-2 2.312 0 .754.418 1.445 1.094 1.781L24 17.625a.357.357 0 01-.375.375h-1.25a.357.357 0 01-.375-.375V17h-2v.625c0 1.172.875 2.125 2 2.313V21h2v-1.063c1.125-.187 2-1.14 2-2.312 0-.754-.418-1.441-1.094-1.781L22 14.375c0-.223.152-.375.375-.375h1.25c.223 0 .375.152.375.375V15h2v-.625c0-1.172-.875-2.125-2-2.313V11zM6 14v2h7v-2zm2.5 3c-.605 0-1.031.344-1.313.656-.28.313-.488.66-.656 1.032C6.195 19.433 6 20.238 6 21h2c0-.32.156-1.016.375-1.5.063-.14.125-.188.188-.281.074.101.128.168.218.312.145.235.305.516.5.782.196.265.434.703 1.188.718.594.012.777-.203.969-.343.19-.141.324-.274.468-.407.098-.09.176-.156.25-.218.028.039.137.105.688.343.668.293 1.68.594 3.156.594v-2c-1.23 0-1.871-.2-2.344-.406C13.184 18.387 12.824 18 12 18c-.602 0-.754.234-.938.375-.164.125-.277.258-.406.375-.058-.094-.086-.14-.156-.25a4.682 4.682 0 00-.656-.875C9.554 17.332 9.098 17 8.5 17z"
        }
      ></path>
    </svg>
  );
}

export default Icon57Icon;
/* prettier-ignore-end */
