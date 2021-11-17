import * as React from "react";

import { isArray, isObject } from "lodash";

import ChipBadgeDisplay from "./ChipBadgeDisplay";
import { PlasmicServiceListingConfirmationItem } from "./plasmic/market_v_2/PlasmicServiceListingConfirmationItem";
import ServiceListingArrayFieldConfirmation from "./ServiceListingArrayFieldConfirmation";
import ServiceListingImagesConfirmation from "./ServiceListingImagesConfirmation";

function ServiceListingConfirmationItem_({value, hasListContent, hasArrayFieldContent, hasImages, ...props}, ref) {

  return (
    <PlasmicServiceListingConfirmationItem
      root={{ ref }}
      {...props}
      textContent={!hasListContent && !hasArrayFieldContent && !hasImages ? value : ""}
      hasListContent={hasListContent}
      listContent={
        hasListContent && isArray(value) ? (
          value?.map(item => <ChipBadgeDisplay children={item.label} type="ghost" color="brand" />)
         ) : (
           <ChipBadgeDisplay children={value?.label} type="ghost" color="brand" />
         ) 
      }
      hasArrayFieldContent={hasArrayFieldContent}
      arrayFieldContent={
        hasArrayFieldContent ? value?.map(item => <ServiceListingArrayFieldConfirmation {...item} />) : null
      }
      hasImages={hasImages}
      imageContent={
        hasImages ? (
          <ServiceListingImagesConfirmation images={value} />
        ): null
      }
    />
  );
}

const ServiceListingConfirmationItem = React.forwardRef(
  ServiceListingConfirmationItem_
);

export default ServiceListingConfirmationItem;
