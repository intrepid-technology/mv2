import * as React from "react";
import { PlasmicSelectInput__OptionGroup } from "./plasmic/market_v_2/PlasmicSelectInput__OptionGroup";

function SelectInput__OptionGroup(props) {
  const { plasmicProps } = PlasmicSelectInput__OptionGroup.useBehavior(props);
  return <PlasmicSelectInput__OptionGroup {...plasmicProps} />;
}

export default Object.assign(SelectInput__OptionGroup, {
  __plumeType: "select-option-group"
});
