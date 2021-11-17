import * as React from "react";

import {
  PROCESS_STEP_DEFUALT_ITEM,
  addNewArrayFieldToServiceListing,
  removeArrayFieldFromServiceListing,
  updateServiceList,
} from "../../../state/serviceListing/serviceListingSlice";
import { useDispatch, useSelector } from "react-redux";

import { PlasmicServicelistingdescription } from "../../../components/plasmic/market_v_2/PlasmicServicelistingdescription";
import { selectServiceListing } from "../../../state/serviceListing/selectors";

function Servicelistingdescription() {
  const serviceListing = useSelector(selectServiceListing);
  const dispatch = useDispatch();

  console.log("Description ", serviceListing);

  return (
      <PlasmicServicelistingdescription
        serviceNameInput={{
          value: serviceListing.name,
          onChange: (newValue) =>
            dispatch(updateServiceList({ key: "name", value: newValue })),
        }}
        serviceDescriptionInput={{
          value: serviceListing.description,
          onChange: (newValue) =>
            dispatch(
              updateServiceList({ key: "description", value: newValue })
            ),
        }}
        deliveryProcessOverviewInput={{
          value: serviceListing.delivery?.process?.overview,
          onChange: (newValue) =>
            dispatch(
              updateServiceList({
                key: "delivery.process.overview",
                value: newValue,
              })
            ),
        }}
        processStepsArrayFields={{
          fieldKinds: ["text", "textarea"],
          fieldPlaceholders: ["Process Title", "Description"],
          data: serviceListing.delivery?.process?.steps,
          onChange: ({ rowIndex, key, value }) => {
            if (rowIndex === undefined) return;
            dispatch(
              updateServiceList({
                key: `delivery.process.steps[${rowIndex}].${key}`,
                value,
              })
            );
          },
          onAdd: () => {
            dispatch(addNewArrayFieldToServiceListing({key: 'delivery.process.steps', defaultItem: PROCESS_STEP_DEFUALT_ITEM}));
          },
          onRemove: (index) => {
            dispatch(removeArrayFieldFromServiceListing({ index, key: 'delivery.process.steps' }));
          },
        }}
      />
  );
}

export default Servicelistingdescription;
