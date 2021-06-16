import * as React from "react";
import { PlasmicSelectDropdownPrimary__OptionGroup } from "./plasmic/market_v_2/PlasmicSelectDropdownPrimary__OptionGroup";

function SelectDropdownPrimary__OptionGroup(props) {
  const { plasmicProps } =
    PlasmicSelectDropdownPrimary__OptionGroup.useBehavior(props);
  return <PlasmicSelectDropdownPrimary__OptionGroup {...plasmicProps} />;
}

export default Object.assign(SelectDropdownPrimary__OptionGroup, {
  __plumeType: "select-option-group"
});
