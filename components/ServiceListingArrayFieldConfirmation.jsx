import * as React from "react";

import { PlasmicServiceListingArrayFieldConfirmation } from "./plasmic/market_v_2/PlasmicServiceListingArrayFieldConfirmation";

function ServiceListingArrayFieldConfirmation_(props, ref) {
  return (
    <PlasmicServiceListingArrayFieldConfirmation root={{ ref }} {...props} />
  );
}

const ServiceListingArrayFieldConfirmation = React.forwardRef(
  ServiceListingArrayFieldConfirmation_
);

export default ServiceListingArrayFieldConfirmation;
