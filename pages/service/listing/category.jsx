import * as React from "react";

import { PlasmicServicelistingcategory } from "../../../components/plasmic/market_v_2/PlasmicServicelistingcategory";
import { selectServiceListing } from "../../../state/serviceListing/selectors";
import { updateServiceList } from "../../../state/serviceListing/serviceListingSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useServiceCategories} from "../../../hooks/useServiceCategories";
import { useServiceFeatures } from "../../../hooks/useServiceFeatures";
import { useServiceIndustries } from "../../../hooks/useServiceIndustries.js";
import { useServiceTechnologies } from "../../../hooks/useServiceTechnologies";
import { useServices } from "../../../hooks/useServices";

function Servicelistingcategory() {
  const serviceListing = useSelector(selectServiceListing);
  const dispatch = useDispatch();

  const serviceCategoriesList = useServiceCategories()
  const services = useServices()
  const serviceFeatures = useServiceFeatures()
  const serviceIndustries = useServiceIndustries()
  const serviceTechnologies = useServiceTechnologies()

  console.log({serviceListing})
  return (
      <PlasmicServicelistingcategory
        serviceCategorySelectInput={{
          value: serviceListing.category.serviceCategory,
          onChange: (category) =>
            dispatch(
              updateServiceList({
                key: "category.serviceCategory",
                value: category,
              })
            ),
          options: serviceCategoriesList,
        }}
        serviceSelectInput={{
          value: serviceListing.category.service,
          onChange: (service) =>
            dispatch(
              updateServiceList({ key: "category.service", value: service })
            ),
          options: services,
        }}
        serviceContentTextArea={{
          value: serviceListing.category.content,
          onChange: (newValue) =>
            dispatch(updateServiceList({ key: "category.content", value: newValue })),
        }}
        serviceFeaturesCheckboxes={{
          value: serviceListing.category.features,
          onChange: (features) =>
            dispatch(
              updateServiceList({ key: "category.features", value: features })
            ),
          options: serviceFeatures,
        }}
        serviceIndustriesSelect={{
          value: serviceListing.category.industries,
          onChange: (industries) =>
            dispatch(
              updateServiceList({
                key: "category.industries",
                value: industries,
              })
            ),
          options: serviceIndustries
        }}
        serviceToolsSelect={{
          value: serviceListing.category.tools,
          onChange: (tools) =>
            dispatch(
              updateServiceList({ key: "category.tools", value: tools })
            ),
          options: serviceTechnologies,
        }}
      />
  );
}

export default Servicelistingcategory;
