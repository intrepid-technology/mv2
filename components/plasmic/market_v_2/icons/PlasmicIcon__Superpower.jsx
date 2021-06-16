// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SuperpowerIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1792 2048"}
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
          "M1792 128c-333.2 44-667.2 88-1000 132-368 50-653.2 346.8-676 720-13.2 222 72 438 231.2 592.8L0 1920c333.2-44 666-88 999.2-132 367.2-50 653.2-347.2 674.8-719.2 14-222-72-438-230.8-592.8L1792 128zm-318.8 929.2c-16.8 318-296 556.8-611.2 538-318-18.8-562.8-284-545.2-604 18-316.8 297.2-557.2 612-538 317.2 18.8 562 284 544.4 604z"
        }
      ></path>
    </svg>
  );
}

export default SuperpowerIcon;
/* prettier-ignore-end */
