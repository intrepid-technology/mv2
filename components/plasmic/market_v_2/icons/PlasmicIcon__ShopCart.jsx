// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ShopCartIcon(props) {
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
          "M5.56 4.06c.162-.038.334-.058.511-.057L20.041 5c1.251.022 2.476 1.06 1.872 2.41-.118.262-.65 1.331-1.495 3.014l-1.053 2.092-.343.678-.105.209a2.625 2.625 0 01-1.653 1.55l-.147.047H7.024l-1.974-.001C4.48 15.027 4.027 15.48 4 16l-.002.94c.035.572.492 1.03 1.002 1.06h.17a3.001 3.001 0 015.66 0h2.34a3.001 3.001 0 110 2h-2.34a3.001 3.001 0 01-5.66-.001h-.227C3.363 19.908 2.097 18.643 2 17l.001-1.05c.08-1.591 1.35-2.864 2.989-2.95l-.98-6.859L4 6c0-.647-.33-1.415-.707-1.793C3.195 4.11 2.758 4 2 4V2c1.242 0 2.138.224 2.707.793.335.335.63.776.853 1.267zM7.113 13h9.656a.625.625 0 00.29-.338l.049-.113.13-.257.341-.677c.354-.7.707-1.403 1.037-2.06l.015-.029a304.68 304.68 0 001.262-2.531L6.01 6l.98 6.859a.17.17 0 00.123.14zM16 20a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"
        }
      ></path>
    </svg>
  );
}

export default ShopCartIcon;
/* prettier-ignore-end */
