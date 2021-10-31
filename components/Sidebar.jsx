import * as React from "react";

import { PlasmicSidebar } from "./plasmic/market_v_2/PlasmicSidebar";
import { useLayout } from "./plasmic/market_v_2/PlasmicGlobalVariant__Layout";

function Sidebar_(props, ref) {
  const {setSidebarOpen, setIsSellerView} = useLayout()

  return (
  <PlasmicSidebar
    root={{ ref }} 
    {...props}
    closeIcon={{
      onClick: () => setSidebarOpen(false)
    }}
    switchToSellerButton={{
      onClick: () => setIsSellerView(true)
    }}
    switchToMemberButton={{
      onClick: () => setIsSellerView(false)
    }}
  />
  );
}

const Sidebar = React.forwardRef(Sidebar_);

export default Sidebar;
