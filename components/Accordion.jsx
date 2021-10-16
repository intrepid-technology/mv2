import * as React from "react";

import { PlasmicAccordion } from "./plasmic/market_v_2/PlasmicAccordion";

function Accordion_(props, ref) {
  const [isOpen, setIsOpen] = React.useState(props.isOpen)
  
  return (
    <PlasmicAccordion
      root={{ ref }}
      {...props}
      isOpen={isOpen}
      collapseIconWrapper={{
        onClick: () => setIsOpen(!isOpen)
      }} 
    />
  );
}

const Accordion = React.forwardRef(Accordion_);

export default Accordion;
