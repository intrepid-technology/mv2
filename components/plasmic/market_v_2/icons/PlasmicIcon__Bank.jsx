// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BankIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 43.563 44"}
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
          "M41.956 10.35l-18.8-10a2.905 2.905 0 00-2.765 0l-18.8 10A3 3 0 002.973 16h37.6a3 3 0 001.383-5.65zM2.971 13l18.8-10 18.8 10h-37.6zm37.6 28h-37.6a1.5 1.5 0 000 3h37.6a1.5 1.5 0 00.002-3zm0-20a1.5 1.5 0 000-3h-37.6a1.5 1.5 0 000 3h1.89v15h-1.89a1.5 1.5 0 000 3h37.6a1.5 1.5 0 000-3h-2.722V21h2.722zm-22.759 0h2.032v15h-2.03V21zm-2.968 15h-2V21h2v15zm8-15h1.982v15h-1.982V21zm5 0h2v15h-2V21zm-20 0h2.009v15H7.844V21zm27 15h-2V21h2v15z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default BankIcon;
/* prettier-ignore-end */
