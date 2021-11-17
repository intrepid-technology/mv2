import * as React from "react";

import { PlasmicServiceListingImagesConfirmation } from "./plasmic/market_v_2/PlasmicServiceListingImagesConfirmation";
import { get } from "lodash";

function ServiceListingImagesConfirmation_({images, ...props}, ref) {
  console.log({images})
  return (
    <PlasmicServiceListingImagesConfirmation
      root={{ ref }}
      {...props}
      primaryImage={{
        src: get(images, 0)?.url
      }}
      image1={{
        src: get(images, 1)?.url
      }}
      image2={{
        src: get(images, 2)?.url
      }}
      image3={{
        src: get(images, 3)?.url
      }}
      image4={{
        src: get(images, 4)?.url
      }}
    />
  );
}

const ServiceListingImagesConfirmation = React.forwardRef(
  ServiceListingImagesConfirmation_
);

export default ServiceListingImagesConfirmation;
