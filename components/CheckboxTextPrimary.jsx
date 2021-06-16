import * as React from "react";
import { PlasmicCheckboxTextPrimary } from "./plasmic/market_v_2/PlasmicCheckboxTextPrimary";

function CheckboxTextPrimary_(props, ref) {
  const { plasmicProps, state } = PlasmicCheckboxTextPrimary.useBehavior(
    props,
    ref
  );

  return <PlasmicCheckboxTextPrimary {...plasmicProps} />;
}

const CheckboxTextPrimary = React.forwardRef(CheckboxTextPrimary_);

export default Object.assign(CheckboxTextPrimary, {
  __plumeType: "checkbox"
});
