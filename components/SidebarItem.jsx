import * as React from "react";

import { PlasmicSidebarItem } from "./plasmic/market_v_2/PlasmicSidebarItem";
import { useLayout } from "./plasmic/market_v_2/PlasmicGlobalVariant__Layout";
import { useRouter } from "next/router";

function SidebarItem_(props, ref) {
  const {setSidebarOpen} = useLayout()
  const router = useRouter()

  return (
    <PlasmicSidebarItem
      root={{ ref }}
      {...props}
      selected={router.pathname === props.destination}
      onClick={() => {
        setSidebarOpen(false)
      }}
    />
  );
}

const SidebarItem = React.forwardRef(SidebarItem_);

export default SidebarItem;
