import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import { PlasmicServicelistingdescription } from "../../../components/plasmic/market_v_2/PlasmicServicelistingdescription";
import { selectServiceListing } from "../../../state/serviceListing/selectors";
import { updateServiceList } from "../../../state/serviceListing/serviceListingSlice";

function Servicelistingdescription() {
  const serviceListing = useSelector(selectServiceListing)
  const dispatch = useDispatch()

  return (
    <PlasmicServicelistingdescription
      serviceNameInput={{
        value: serviceListing.name,
        onChange: (newValue) => dispatch(updateServiceList({key: 'name', value: newValue}))
      }}
      serviceDescriptionInput={{
        value: serviceListing.description,
        onChange: (newValue) => dispatch(updateServiceList({key: 'description', value: newValue}))
      }}
      deliveryProcessOverviewInput={{
        value: serviceListing.delivery?.process?.overview,
        onChange: (newValue) => dispatch(updateServiceList({key: 'delivery.process.overview', value: newValue}))
      }}
    />
  );
}

export default Servicelistingdescription;
