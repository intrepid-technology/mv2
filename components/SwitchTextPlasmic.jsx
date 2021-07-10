import * as React from "react";
import { PlasmicSwitchTextPlasmic } from "./plasmic/market_v_2/PlasmicSwitchTextPlasmic";

function SwitchTextPlasmic_(props, ref) {
  const { plasmicProps, state } = PlasmicSwitchTextPlasmic.useBehavior(
    props,
    ref
  );

  return <PlasmicSwitchTextPlasmic {...plasmicProps} />;
}

const SwitchTextPlasmic = React.forwardRef(SwitchTextPlasmic_);

export default Object.assign(SwitchTextPlasmic, {
  __plumeType: "switch"
});
