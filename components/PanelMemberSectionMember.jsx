import * as React from "react";

import { PlasmicPanelMemberSectionMember } from "./plasmic/market_v_2/PlasmicPanelMemberSectionMember";
import { useLayout } from "./plasmic/market_v_2/PlasmicGlobalVariant__Layout";

function PanelMemberSectionMember_(props, ref) {
  const {setIsSellerView} = useLayout()

  return (
    <PlasmicPanelMemberSectionMember
      root={{ ref }}
      {...props}
      switchToPartnerButton={{
        onClick: () => setIsSellerView(true)
      }}
    />
  );
}

const PanelMemberSectionMember = React.forwardRef(PanelMemberSectionMember_);

export default PanelMemberSectionMember;
