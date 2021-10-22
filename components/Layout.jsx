import * as React from "react";

import LayoutContext from "./plasmic/market_v_2/PlasmicGlobalVariant__Layout";
import { PlasmicLayout } from "./plasmic/market_v_2/PlasmicLayout";
import { useLocalStorageState } from "../utils/useLocalStorage";

function Layout_(props, ref) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [isSellerView, setIsSellerView] = useLocalStorageState(false)

  return (
    <LayoutContext.Provider value={{ sidebarOpen, setSidebarOpen, isSellerView, setIsSellerView }}>
      <PlasmicLayout
        root={{ ref }}
        {...props}
      />
    </LayoutContext.Provider>
  );
}

const Layout = React.forwardRef(Layout_);

export default Layout;
