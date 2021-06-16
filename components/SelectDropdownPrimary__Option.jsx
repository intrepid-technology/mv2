import * as React from "react";
import { PlasmicSelectDropdownPrimary__Option } from "./plasmic/market_v_2/PlasmicSelectDropdownPrimary__Option";

function SelectDropdownPrimary__Option_(props, ref) {
  const { plasmicProps } = PlasmicSelectDropdownPrimary__Option.useBehavior(
    props,
    ref
  );

  return <PlasmicSelectDropdownPrimary__Option {...plasmicProps} />;
}

const SelectDropdownPrimary__Option = React.forwardRef(
  SelectDropdownPrimary__Option_
);

export default Object.assign(SelectDropdownPrimary__Option, {
  __plumeType: "select-option"
});
