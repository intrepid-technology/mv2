import * as React from "react";
import { PlasmicSelectDropdownPrimary__Overlay } from "./plasmic/market_v_2/PlasmicSelectDropdownPrimary__Overlay";

function SelectDropdownPrimary__Overlay_(props, ref) {
  const { plasmicProps } = PlasmicSelectDropdownPrimary__Overlay.useBehavior(
    props,
    ref
  );

  return <PlasmicSelectDropdownPrimary__Overlay {...plasmicProps} />;
}

const SelectDropdownPrimary__Overlay = React.forwardRef(
  SelectDropdownPrimary__Overlay_
);

export default Object.assign(SelectDropdownPrimary__Overlay, {
  __plumeType: "triggered-overlay"
});
