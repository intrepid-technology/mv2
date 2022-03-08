// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon87Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
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
          "M6.5 4h3c.676 0 .655 1 0 1h-3c-.66 0-.662-1 0-1zm-4 0c-.826-.003-1.417.688-1.5 1.437l-1 9C-.098 15.32.676 16 1.5 16h13c.824 0 1.598-.68 1.5-1.563l-1-9c-.083-.75-.678-1.434-1.5-1.437-.643 0-.667 1 0 1 .286 0 .46.18.5.53l1 9c.024.22-.216.47-.5.47h-13c-.284 0-.524-.25-.5-.47l1-9c.04-.35.218-.53.5-.53.642 0 .683-1 0-1zM8 0C5.793 0 4 1.793 4 4v1.5c0 .663 1 .625 1 0V4c0-1.67 1.33-3 3-3s3 1.33 3 3v1.5c0 .69 1 .608 1 0V4c0-2.207-1.793-4-4-4z"
        }
      ></path>
    </svg>
  );
}

export default Icon87Icon;
/* prettier-ignore-end */