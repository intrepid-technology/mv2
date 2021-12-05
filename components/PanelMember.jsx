import * as React from "react";

import { PlasmicPanelMember } from "./plasmic/market_v_2/PlasmicPanelMember";
import { useLayout } from "./plasmic/market_v_2/PlasmicGlobalVariant__Layout";

function PanelMember_(props, ref) {
  const {setIsSellerView} = useLayout()

  return (
    <PlasmicPanelMember
      root={{ ref }}
      {...props}
      switchToPartnerButton={{
        onClick: () => {
          setIsSellerView(true)
        }
      }}
    />
  );
}

const PanelMember = React.forwardRef(PanelMember_);

export default PanelMember;
