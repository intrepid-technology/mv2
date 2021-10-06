import * as React from "react";
import { PlasmicSelectInput__Option } from "./plasmic/market_v_2/PlasmicSelectInput__Option";

function SelectInput__Option_(props, ref) {
  const { plasmicProps } = PlasmicSelectInput__Option.useBehavior(props, ref);
  return <PlasmicSelectInput__Option {...plasmicProps} />;
}

const SelectInput__Option = React.forwardRef(SelectInput__Option_);

export default Object.assign(SelectInput__Option, {
  __plumeType: "select-option"
});
