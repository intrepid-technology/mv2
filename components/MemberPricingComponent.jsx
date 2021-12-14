import * as React from "react";

import { PlasmicMemberPricingComponent } from "./plasmic/market_v_2/PlasmicMemberPricingComponent";

function MemberPricingComponent_(props, ref) {
  const [annual, setAnnual] = React.useState(false)

  return (
    <PlasmicMemberPricingComponent
      root={{ ref }}
      {...props}
      annual={annual}
      monthlyPricingDiv={{
        onClick: () => setAnnual(false)
      }}
      annualPricingDiv={{
        onClick: () => setAnnual(true)
      }}
    />
  );
}

const MemberPricingComponent = React.forwardRef(MemberPricingComponent_);

export default MemberPricingComponent;
