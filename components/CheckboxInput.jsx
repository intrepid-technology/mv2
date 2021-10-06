import * as React from "react";
import { PlasmicCheckboxInput } from "./plasmic/market_v_2/PlasmicCheckboxInput";

function CheckboxInput_(props, ref) {
  const { plasmicProps, state } = PlasmicCheckboxInput.useBehavior(props, ref);
  return <PlasmicCheckboxInput {...plasmicProps} />;
}

const CheckboxInput = React.forwardRef(CheckboxInput_);

export default Object.assign(CheckboxInput, {
  __plumeType: "checkbox"
});
