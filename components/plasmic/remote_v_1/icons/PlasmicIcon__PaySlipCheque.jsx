// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PaySlipChequeIcon(props) {
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
          "M2 7v18h28V7H2zm2 2h24v14H4V9zm2 2v2h10v-2H6zm14 0v5h6v-5h-6zM6 14v2h7v-2H6zm2.5 3c-.605 0-1.03.344-1.313.656-.28.313-.488.66-.656 1.032C6.195 19.434 6 20.238 6 21h2c0-.32.156-1.016.375-1.5.062-.141.126-.188.188-.281.073.102.128.167.218.312.145.234.305.517.5.782s.434.702 1.188.718c.594.012.777-.203.969-.343.19-.141.323-.274.468-.407.098-.09.176-.155.25-.218.027.039.139.104.69.343.667.292 1.677.594 3.154.594v-2c-1.23 0-1.87-.2-2.344-.406C13.183 18.387 12.824 18 12 18c-.602 0-.754.234-.938.375-.163.125-.277.258-.406.375-.059-.094-.086-.141-.156-.25a4.701 4.701 0 00-.656-.875C9.554 17.332 9.098 17 8.5 17zM20 19v2h6v-2h-6z"
        }
      ></path>
    </svg>
  );
}

export default PaySlipChequeIcon;
/* prettier-ignore-end */
