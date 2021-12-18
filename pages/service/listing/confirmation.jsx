import * as React from "react";

import { PlasmicServicelistingconfirmation } from "../../../components/plasmic/market_v_2/PlasmicServicelistingconfirmation";
import { selectServiceListing } from "../../../state/serviceListing/selectors";
import { useSelector } from "react-redux";
import { useService } from "../../../hooks/useServices";
import { useServiceCategory } from "../../../hooks/useServiceCategories";
import usecreateListing from "../../../hooks/useCreateListing";

function Servicelistingconfirmation() {
  const serviceListing = useSelector(selectServiceListing);

  const serviceCategory = useServiceCategory(serviceListing?.category?.serviceCategory)
  const service = useService(serviceListing?.category?.service)
  const createListingMutation = usecreateListing(serviceListing);

  if (createListingMutation.isSuccess) {
    console.log("Service Listing Added!")
  }

  if (createListingMutation.isError) {
    console.log(createListingMutation.error.message);
  }

  return (
    <PlasmicServicelistingconfirmation
      serviceCategory={{
        value: serviceCategory
      }}
      service={{
        value: service
      }}
      serviceFeatures={{
        value: serviceListing?.category?.features
      }}
      serviceContent={{
        value: serviceListing?.category?.content
      }}
      serviceIndustries={{
        value: serviceListing?.category?.industries
      }}
      serviceTools={{
        value: serviceListing?.category?.tools
      }}
      serviceName={{
        value: serviceListing?.name
      }}
      serviceDescription={{
        value: serviceListing?.description
      }}
      serviceDeliveryProcessOverview={{
        value: serviceListing?.delivery?.process?.overview
      }}
      serviceDeliveryProcessSteps={{
        value: serviceListing?.delivery?.process?.steps
      }}
      serviceDeliveryTime={{
        value: serviceListing?.delivery?.time
      }}
      serviceDeliveryMeetings={{
        value: serviceListing?.delivery?.meetings
      }}
      serviceDeliveryRevisions={{
        value: serviceListing?.delivery?.revisions
      }}
      serviceDeliveryRequirements={{
        value: serviceListing?.delivery?.requirements
      }}
      serviceDeliveryFormats={{
        value: serviceListing?.delivery?.formats
      }}
      serviceImages={{
        value: serviceListing?.images
      }}
      footerServiceListing={{
        saveButton: {
          onClick: () => {
            createListingMutation.mutate()
          }
        }
      }}
    />
  );
}

export default Servicelistingconfirmation;
