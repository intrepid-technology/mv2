import * as React from "react";

import { PlasmicServicelistingcategory } from "../../../components/plasmic/market_v_2/PlasmicServicelistingcategory";
import { selectServiceListing } from "../../../state/serviceListing/selectors";
import { updateServiceList } from "../../../state/serviceListing/serviceListingSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Servicelistingcategory() {
  const serviceListing = useSelector(selectServiceListing)
  const dispatch = useDispatch()

  return (
    <PlasmicServicelistingcategory
      serviceCategorySelectInput={{
        value: serviceListing.category.serviceCategory,
        onChange: (category) => dispatch(updateServiceList({key: 'category.serviceCategory', value: category})),
        options: [
          { id: 1, label: "Category 1" },
          { id: 2, label: "Category 2" },
          { id: 3, label: "Category 3" },
          { id: 4, label: "Category 4" },
        ],
      }}
      serviceSelectInput={{
        value: serviceListing.category.service,
        onChange: (service) => dispatch(updateServiceList({key: 'category.service', value: service})),
        options: [
          { id: 1, label: "Service 1" },
          { id: 2, label: "Service 2" },
          { id: 3, label: "Service 3" },
          { id: 4, label: "Service 4" },
        ],
      }}
      serviceFeaturesCheckboxes={{
        value: serviceListing.category.features,
        onChange: (features) => dispatch(updateServiceList({key: 'category.features', value: features})),
        options: [
          { id: 1, label: "Competitor Analysis" },
          { id: 2, label: "Quatitative Survey" },
          { id: 3, label: "User Personas" },
          { id: 4, label: "User Journey Mapping" },
          { id: 5, label: "Product Positioning" },
        ],
      }}
      serviceIndustriesSelect={{
        value: serviceListing.category.industries,
        onChange: (industries) => dispatch(updateServiceList({key: 'category.industries', value: industries})),
        options: [
          { id: 1, label: "Industry 1" },
          { id: 2, label: "Industry 2" },
          { id: 3, label: "Industry 3" },
          { id: 4, label: "Industry 4" },
        ],
      }}
      serviceToolsSelect={{
        value: serviceListing.category.tools,
        onChange: (tools) => dispatch(updateServiceList({key: 'category.tools', value: tools})),
        options: [
          { id: 1, label: "Tool 1" },
          { id: 2, label: "Tool 2" },
          { id: 3, label: "Tool 3" },
          { id: 4, label: "Tool 4" },
        ],
      }}
    />
  );
}

export default Servicelistingcategory;
