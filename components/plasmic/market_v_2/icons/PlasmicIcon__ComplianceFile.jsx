// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ComplianceFileIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
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
        fillRule={"evenodd"}
        d={
          "M15 3.414V7h3.586L15 3.414zM19 9h-4a2 2 0 01-2-2V3H5v18h14V9zM5 1h10.414L21 6.586V21a2 2 0 01-2 2H5a2 2 0 01-2-2V3a2 2 0 012-2zm6 14.586l4.293-4.293 1.414 1.414L11 18.414l-3.707-3.707 1.414-1.414L11 15.586z"
        }
      ></path>
    </svg>
  );
}

export default ComplianceFileIcon;
/* prettier-ignore-end */
