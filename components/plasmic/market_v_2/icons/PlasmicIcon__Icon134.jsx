// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon134Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
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
          "M18.8 8.022h-6.413L10 1.3 7.611 8.022H1.199l5.232 3.947-1.871 6.929L10 14.744l5.438 4.154-1.869-6.929L18.8 8.022zM10 12.783l-3.014 2.5 1.243-3.562-2.851-2.3 3.522.101 1.1-4.04 1.099 4.04 3.521-.101-2.851 2.3 1.243 3.562-3.012-2.5z"
        }
      ></path>
    </svg>
  );
}

export default Icon134Icon;
/* prettier-ignore-end */
