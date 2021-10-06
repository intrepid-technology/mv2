import * as React from "react";

import Option from "./SelectInput__Option";
import OptionGroup from "./SelectInput__OptionGroup";
import { PlasmicSelectInput } from "./plasmic/market_v_2/PlasmicSelectInput";

function SelectInput_(props, ref) {
  const { plasmicProps, state } = PlasmicSelectInput.useBehavior(props, ref);
  return <PlasmicSelectInput {...plasmicProps} />;
}

const SelectInput = React.forwardRef(SelectInput_);

export default Object.assign(SelectInput, {
  Option,
  OptionGroup,
  __plumeType: "select",
});
