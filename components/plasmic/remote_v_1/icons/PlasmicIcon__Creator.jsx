// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CreatorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 2048 2048"}
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
          "M2048 670v898q0 51-22.5 92t-58.5 70.5-82 45.5-93 16-93-16-82-45.5-58.5-70.5-22.5-92 22.5-92.5 58.5-70.5 82-45 93-16q66 0 128 31V834l-640 160v702q0 51-22.5 92t-58.5 70.5-82 45.5-93 16-93-16-82-45.5-58.5-70.5-22.5-92 22.5-92.5T849 1533t82-45 93-16q66 0 128 31V894zM1024 1792q20 0 42.5-6t41.5-18 31.5-30 12.5-42-12.5-42-31.5-30-41.5-18-42.5-6-42.5 6-41.5 18-31.5 30-12.5 42 12.5 42 31.5 30 41.5 18 42.5 6zm768-128q20 0 42.5-6t41.5-18 31.5-30 12.5-42-12.5-42-31.5-30-41.5-18-42.5-6-42.5 6-41.5 18-31.5 30-12.5 42 12.5 42 31.5 30 41.5 18 42.5 6zM384 640H256V512h128v128zM256 768h128v128H256V768zm896-256h128v128h-128V512zm-128 768H0V128h1536v512l-128 32V256h-128v128h-128V256H384v128H256V256H128v896h128v-128h128v128h640v128z"
        }
      ></path>
    </svg>
  );
}

export default CreatorIcon;
/* prettier-ignore-end */
