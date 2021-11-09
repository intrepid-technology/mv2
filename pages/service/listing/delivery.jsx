import * as React from "react";

import { DELIVERY_REQUIREMENT_DEFUALT_ITEM, addNewArrayFieldToServiceListing, removeArrayFieldFromServiceListing, updateServiceList } from "../../../state/serviceListing/serviceListingSlice";
import { useDispatch, useSelector } from "react-redux";

import { PlasmicServicelistingdelivery } from "../../../components/plasmic/market_v_2/PlasmicServicelistingdelivery";
import { selectServiceListing } from "../../../state/serviceListing/selectors";
import useCreateListing from "../../../hooks/useCreateListing";

function Servicelistingdelivery() {
  const serviceListing = useSelector(selectServiceListing);
  const dispatch = useDispatch();

  console.log("Delivery ", serviceListing);

  const createListingMutation = useCreateListing(serviceListing);

  if (createListingMutation.isSuccess) {
    alert("Inserted");
  }

  if (createListingMutation.isError) {
    console.log(createListingMutation.error.message);
  }

  return (
    <>
      <button onClick={async () => createListingMutation.mutate()}>
        Submit
      </button>
      <PlasmicServicelistingdelivery
        deliveryTimeInput={{
          value: serviceListing.delivery.time,
          onChange: (newValue) =>
            dispatch(updateServiceList({ key: "delivery.time", value: newValue })),
        }}
        meetingsSelectInput={{
          value: serviceListing.delivery.meetings,
          onChange: (meeting) =>
            dispatch(
              updateServiceList({
                key: "delivery.meetings",
                value: meeting,
              })
            ),
          options: [
            { id: 1, label: "1" },
            { id: 2, label: "2" },
            { id: 3, label: "3" },
            { id: 4, label: "4" },
            { id: 5, label: "5" },
            { id: 6, label: "6" },
            { id: 7, label: "7" },
            { id: 8, label: "8" },
            { id: 9, label: "9" },
            { id: 10, label: "10" },
            { id: 11, label: "Unlimited" },
          ],
        }}
        revisionsSelectInput={{
          value: serviceListing.delivery.revisions,
          onChange: (revision) =>
            dispatch(
              updateServiceList({
                key: "delivery.revisions",
                value: revision,
              })
            ),
          options: [
            { id: 1, label: "1" },
            { id: 2, label: "2" },
            { id: 3, label: "3" },
            { id: 4, label: "4" },
            { id: 5, label: "5" },
            { id: 6, label: "6" },
            { id: 7, label: "7" },
            { id: 8, label: "8" },
            { id: 9, label: "9" },
            { id: 10, label: "10" },
            { id: 11, label: "Unlimited" },
          ],
        }}
        deliveryRequirementsArrayFields={{
          fieldKinds: ["text", "textarea"],
          fieldPlaceholders: ["Requirement Title", "Description"],
          data: serviceListing.delivery?.requirements,
          onChange: ({ rowIndex, key, value }) => {
            if (rowIndex === undefined) return;
            dispatch(
              updateServiceList({
                key: `delivery.requirements[${rowIndex}].${key}`,
                value,
              })
            );
          },
          onAdd: () => {
            dispatch(addNewArrayFieldToServiceListing({key: 'delivery.requirements', defaultItem: DELIVERY_REQUIREMENT_DEFUALT_ITEM}));
          },
          onRemove: (index) => {
            dispatch(removeArrayFieldFromServiceListing({ index, key: 'delivery.requirements' }));
          },
        }}
        deliveryFormatsMultiSelectInput={{
          value: serviceListing.delivery.formats,
          onChange: (formats) =>
            dispatch(
              updateServiceList({ key: "delivery.formats", value: formats })
            ),
          options: [
            { id: 1, label: "Format 1" },
            { id: 2, label: "Format 2" },
            { id: 3, label: "Format 3" },
            { id: 4, label: "Format 4" },
          ],
        }}
      />;
    </>
  );
}

export default Servicelistingdelivery;
