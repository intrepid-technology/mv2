import * as React from "react";
import { PlasmicSwitchTextPrimary } from "./plasmic/market_v_2/PlasmicSwitchTextPrimary";

function SwitchTextPrimary_(props, ref) {
  const { plasmicProps, state } = PlasmicSwitchTextPrimary.useBehavior(
    props,
    ref
  );

  return <PlasmicSwitchTextPrimary {...plasmicProps} />;
}

const SwitchTextPrimary = React.forwardRef(SwitchTextPrimary_);

export default Object.assign(SwitchTextPrimary, {
  __plumeType: "switch"
});
