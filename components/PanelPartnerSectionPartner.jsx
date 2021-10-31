import * as React from "react";

import { PlasmicPanelPartnerSectionPartner } from "./plasmic/market_v_2/PlasmicPanelPartnerSectionPartner";
import { useLayout } from "./plasmic/market_v_2/PlasmicGlobalVariant__Layout";

function PanelPartnerSectionPartner_(props, ref) {
  const {setIsSellerView} = useLayout()

  return (
    <PlasmicPanelPartnerSectionPartner
      root={{ ref }}
      {...props}
      switchToMemberButton={{
        onClick: () => setIsSellerView(false)
      }}
    />
  );
}

const PanelPartnerSectionPartner = React.forwardRef(
  PanelPartnerSectionPartner_
);

export default PanelPartnerSectionPartner;
