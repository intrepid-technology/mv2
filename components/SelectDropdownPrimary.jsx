import * as React from "react";
import { PlasmicSelectDropdownPrimary } from "./plasmic/market_v_2/PlasmicSelectDropdownPrimary";
import Option from "./SelectDropdownPrimary__Option";
import OptionGroup from "./SelectDropdownPrimary__OptionGroup";

function SelectDropdownPrimary_(props, ref) {
  const { plasmicProps, state } = PlasmicSelectDropdownPrimary.useBehavior(
    props,
    ref
  );

  return <PlasmicSelectDropdownPrimary {...plasmicProps} />;
}

const SelectDropdownPrimary = React.forwardRef(SelectDropdownPrimary_);

export default Object.assign(SelectDropdownPrimary, {
  Option,
  OptionGroup,
  __plumeType: "select"
});
