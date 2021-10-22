import * as React from "react";

import { PlasmicNavbar } from "./plasmic/market_v_2/PlasmicNavbar";
import { useLayout } from "./plasmic/market_v_2/PlasmicGlobalVariant__Layout";

function Navbar_(props, ref) {
  const { setSidebarOpen }  = useLayout()

  return (
    <PlasmicNavbar
      root={{ ref }}
      {...props}
      menuIcon={{
        onClick: () => {
          setSidebarOpen(true)
        }
      }}
    />
  );
}

const Navbar = React.forwardRef(Navbar_);

export default Navbar;
