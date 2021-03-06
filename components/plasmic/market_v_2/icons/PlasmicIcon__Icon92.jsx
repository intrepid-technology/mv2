// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon92Icon(props) {
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
          "M16.688 3l-.313.281L9.594 10H5v16h16.844c1.41 0 2.64-.996 2.937-2.375l2.157-10C27.331 11.777 25.887 10 24 10h-5.75l.188-.75c.203-.156.332-.223.625-.625.468-.64.937-1.633.937-2.969C20 4.23 18.71 3 17.094 3zm.718 2.094c.422.082.594.254.594.562 0 .903-.273 1.461-.531 1.813-.258.351-.438.437-.438.437l-.343.188-.125.406-.594 2.25-.313 1.25H24c.66 0 1.105.574.969 1.219l-2.125 10a1.008 1.008 0 01-1 .781H11V11.406zM7 12h2v12H7z"
        }
      ></path>
    </svg>
  );
}

export default Icon92Icon;
/* prettier-ignore-end */
