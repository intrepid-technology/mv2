// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SlackIcon(props) {
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
          "M45.99 17.402C41.045.908 33.897-2.939 17.403 2.01.91 6.956-2.939 14.104 2.01 30.598 6.958 47.09 14.105 50.939 30.598 45.99c16.494-4.949 20.341-12.096 15.393-28.589M37.649 28.11l-3.11 1.041 1.078 3.22a2.487 2.487 0 11-4.718 1.579l-1.078-3.218-6.413 2.148 1.077 3.218a2.488 2.488 0 11-4.717 1.58l-1.079-3.218-3.11 1.042a2.489 2.489 0 01-1.581-4.719l3.112-1.042-2.069-6.173-3.11 1.043a2.488 2.488 0 01-3.15-1.57 2.488 2.488 0 011.57-3.15l3.11-1.042-1.078-3.217a2.488 2.488 0 014.719-1.58l1.077 3.218 6.414-2.148-1.078-3.218a2.49 2.49 0 014.719-1.58l1.077 3.218 3.11-1.042a2.488 2.488 0 111.58 4.719l-3.11 1.04 2.068 6.175 3.11-1.043a2.49 2.49 0 011.58 4.72zm-17.89-6.122l2.068 6.173 6.414-2.148-2.067-6.173-6.414 2.148z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default SlackIcon;
/* prettier-ignore-end */
