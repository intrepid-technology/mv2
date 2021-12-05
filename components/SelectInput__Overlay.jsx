import * as React from "react";

import { PlasmicSelectInput__Overlay } from "./plasmic/market_v_2/PlasmicSelectInput__Overlay";

function SelectInput__Overlay_(props, ref) {
  const { plasmicProps } = PlasmicSelectInput__Overlay.useBehavior(props, ref);
  return <PlasmicSelectInput__Overlay {...plasmicProps} />;
}

const SelectInput__Overlay = React.forwardRef(SelectInput__Overlay_);

export default Object.assign(SelectInput__Overlay, {
  __plumeType: "triggered-overlay"
});
