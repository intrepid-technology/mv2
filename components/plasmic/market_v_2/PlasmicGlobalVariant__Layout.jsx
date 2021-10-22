// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";

export const LayoutContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export function useLayout() {
  return React.useContext(LayoutContext);
}

export default LayoutContext;
/* prettier-ignore-end */
