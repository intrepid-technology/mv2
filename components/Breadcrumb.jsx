import * as React from "react";

import { PlasmicBreadcrumb } from "./plasmic/market_v_2/PlasmicBreadcrumb";

function Breadcrumb_(props, ref) {
  return <PlasmicBreadcrumb root={{ ref }} {...props} />;
}

const Breadcrumb = React.forwardRef(Breadcrumb_);

export default Breadcrumb;
