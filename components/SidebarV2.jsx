import * as React from "react";

import { PlasmicSidebarV2 } from "./plasmic/market_v_2/PlasmicSidebarV2";
import { useLayout } from "./plasmic/market_v_2/PlasmicGlobalVariant__Layout";

function SidebarV2_(props, ref) {
  const {isSellerView, setIsSellerView} = useLayout()

  return (
    <PlasmicSidebarV2
      root={{ ref }}
      {...props}
      memberSwitchItem={{
        switchInputProps: {
          value: isSellerView,
          onChange: value => setIsSellerView(value)
        }
      }}
    />
  );
}

const SidebarV2 = React.forwardRef(SidebarV2_);

export default SidebarV2;
