import * as React from "react";

import { LayoutContext } from "../components/plasmic/market_v_2/PlasmicGlobalVariant__Layout";
import { PlasmicInbox } from "../components/plasmic/market_v_2/PlasmicInbox";

function Inbox() {
  return (
    <LayoutContext.Provider value={undefined}>
      <PlasmicInbox />
    </LayoutContext.Provider>
  );
}

export default Inbox;
